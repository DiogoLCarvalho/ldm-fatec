const {Sequelize, sequelize} = require('./db.js')

const Clientes = sequelize.define('clientes', {
    nome: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING },
    bairro: { type: Sequelize.STRING },
    cep: { type: Sequelize.STRING },
    cidade: { type: Sequelize.STRING },
    estado: { type: Sequelize.STRING },
    telefone: { type: Sequelize.STRING },
});

// One time run
// Clientes.sync({ force: true });

// Executei uma vez para preencher o banco
// Clientes.create({
//     nome: "Diogo Lima",
//     endereco: "Aguia de Haia",
//     bairro: "Cidade Antônio",
//     cep: "03694000",
//     cidade: "São Paulo",
//     estado: "São Paulo",
//     telefone: "11981152621",
// });

module.exports = {
    Clientes: Clientes
}
