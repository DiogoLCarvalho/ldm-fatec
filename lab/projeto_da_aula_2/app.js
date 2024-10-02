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
    let datavalues = []
    snapshot.forEach(function(doc){
        const data = doc.data()
        data.id = doc.id
        datavalues.push(data)
    })
    res.render("consulta", { data: datavalues })
});

app.post("/cadastrar", (req, res) => {
    var result = db.collection('clientes').add({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,
    }).then(() => {
        console.log("Cadastrado com sucesso!");
        res.redirect('/consulta');
    }).catch((erro) => {
        res.send("Erro:" + erro);
    })
});

app.post("/edicao", async (req, res) => {
    const data = req.body;

    const clientesRef = db.collection('clientes');

    await clientesRef.doc(data['id']).set({
        nome: data['nome'],
        telefone: data['telefone'],
        origem: data['origem'],
        data_contato: data['data_contato'],
        observacao: data['observacao']
      }
    );
    
    res.redirect('/consulta');
});

app.get("/editar/:id", async (req, res) =>{
    const iduser = req.params.id;
    
    const clientesRef = db.collection('clientes').doc(iduser);
    const snapshot = await clientesRef.get();
    let datavalues = snapshot['_fieldsProto']
    
    res.render("editar", { data: datavalues, id: iduser })
});

app.get("/excluir/:id", async (req, res) => {
    const iduser = req.params.id;

    await db.collection('clientes').doc(iduser).delete();

    res.redirect('/consulta');
});


app.listen(8081, () => { console.log("Servidor ativo! http://localhost:8081/") })
