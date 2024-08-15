// Importar as dependências sequelize e mysql2
const Sequelize = require('sequelize');
const mysql = require('mysql2');

// Criar a conexão com o banco com o Sequelize
const sequelize = new Sequelize('dbauladsm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizado com SUCESSO!");
}).catch((erro) => {
    console.log(`Falha ao conectar com o banco :( ${erro}`);
});

// Criar uma entidade com o nome cliente contendo os seguintes campos: nome, endereco, bairro, cep, telefone e celular
const Cliente = sequelize.define('clientes', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    celular: {
        type: Sequelize.INTEGER
    }
});

async function criaNoBanco(nome, endereco, bairro, cep, telefone, celular) {
    try {
        // await Cliente.sync({ force: true });

        await Cliente.create({
            nome: nome,
            endereco: endereco,
            bairro: bairro,
            cep: cep,
            telefone: telefone,
            celular: celular,
        });

    } catch (erro) {
        console.error('Erro ao criar no banco de dados', erro);
    }
};

// Realizar três cadastros na entidade utilizando o arquivo banco.js
criaNoBanco('Diogo Lima', 'Av Aguia de Haia', 'Cidade Antônio', '38891080', '25235352', '11981142132');
criaNoBanco('Jeferson Roberto', 'Av Aguia de Haia', 'Cidade Antônio', '38891080', '25119026', '11974414117');
criaNoBanco('Ana Vitoria', 'Rua das Flores, 123', 'Jardim Primavera', '13456778', '32224567', '11987654321');