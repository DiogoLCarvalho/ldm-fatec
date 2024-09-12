const {Sequelize, sequelize} = require('./banco.js')

const Agendamentos = sequelize.define('agendamentos', {
    nome: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING },
    bairro: { type: Sequelize.STRING },
    cep: { type: Sequelize.INTEGER },
    cidade: { type: Sequelize.STRING },
    estado: { type: Sequelize.STRING },
    telefone: { type: Sequelize.INTEGER },
    celular: { type: Sequelize.INTEGER },
});

// One time run
// Agendamentos.sync({ force: true });

/*
Agendamentos.create({
    nome: "Diogo",
    endereco: "Aguia de Haia",
    bairro: "Jardins",
    cep: 8450231,
    cidade: "São Paulo",
    estado: "São Paulo",
    telefone: 246573345,
    celular: 1198224521,
});
*/

module.exports = {
    Agendamentos: Agendamentos
}