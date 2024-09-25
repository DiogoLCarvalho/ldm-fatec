const express = require('express');
const app = express();
const handlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser');
const post = require('./models/post.js');

app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("cadastro")
});

app.get("/consulta", (req, res) => {
    post.Clientes.findAll().then((posts) => {
        res.render("consulta", { posts: posts })
    }).catch((erro) => {
        res.send("Erro:" + erro);
    });
});

app.get("/editar/:id", (req, res) => {
    post.Clientes.findOne({ where: { "id": req.params.id } }).then((post) => {
        res.render("editar", { post: post.dataValues });
    }).catch((erro) => {
        res.send("Erro:" + erro);
    });
});

app.post("/atualizar", (req, res) => {
    post.Clientes.update(
        {
            nome: req.body.nome,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            cep: req.body.cep,
            cidade: req.body.cidade,
            estado: req.body.estado,
            telefone: req.body.telefone,
        },
        { where: { id: req.body.id } }
    ).then(() => {
        res.redirect('/consulta');
    }).catch((erro) => {
        res.send("Erro:" + erro)
    })
});

app.get("/excluir/:id", (req, res) => {
    post.Clientes.destroy({ where: { "id": req.params.id } }).then(() => {
        res.redirect('/consulta');
    }).catch((erro) => {
        res.send("Erro:" + erro);
    });
});

app.post("/cadastrar", (req, res) => {
    post.Clientes.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefone: req.body.telefone,
    }).then(() => {
        res.redirect('/consulta');
    }).catch((erro) => {
        res.send("Erro:" + erro);
    })
});

app.listen(8081, () => { console.log("Servidor ativo! http://localhost:8081/") })
