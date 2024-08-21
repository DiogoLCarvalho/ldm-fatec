const express = require('express');
const app = express();

// Criar uma rota com o nome cadastro
app.get('/cadastro', function (req, res) {
    res.send('<h1 style="text-align: center;">Página de cadastro!</h1>')
});

// Utilizar a rota cadastro adicionando os parâmetros /:nome/:sobrenome/:idade
app.get('/cadastro/:nome/:sobrenome/:idade', function (req, res) {
    res.send(`
            <h1 style="text-align: center;">Página de cadastro!</h1>
            <p>Olá! ${req.params.nome} ${req.params.sobrenome}</p>
            <p>Parabéns pelos ${req.params.idade} anos de vida!</p>
        `)
});

app.listen(8081, () => console.log("Servidor rodando!"));