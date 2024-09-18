const express = require('express');
const app = express();
const handlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./sextodsm-f3bc9-firebase-adminsdk-14qoi-de811264c3.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore()

app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("primeira_pagina")
});

app.get("/consulta", async (req, res) => {
    const clientesRef = db.collection('clientes');
    const snapshot = await clientesRef.get();
    let data = []
    snapshot.forEach(doc => {
        data.push(doc.data());
    });
    res.render("consulta", { data: data })
});

app.post("/cadastrar", (req, res) => {
    var result = db.collection('clientes').add({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,
    }).then(() => {
        res.redirect('/consulta');
        console.log("Cadastrado com sucesso!");
    }).catch((erro) => {
        res.send("Erro:" + erro);
    })
});

app.listen(8081, () => { console.log("Servidor ativo! http://localhost:8081/") })
