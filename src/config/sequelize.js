// Importa o sequelize
const Sequelize = require("sequelize");
// Configuração do banco de dados
const config = require("./database");
// Criando a variável sequelize e atribuindo o config
const sequelize = new Sequelize(config);

module.exports = sequelize;