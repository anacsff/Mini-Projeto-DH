const db = require("../config/sequelize");
const Sequelize = require("sequelize");


const Aluno = db.define("Aluno", {
    id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,

    },
    data_nascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,

    },
    celular: {
        type: Sequelize.DataTypes.STRING(11),
        allowNull: false,

    },
    curso_id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
    },
},{
    timestamps: false,
});


module.exports = Aluno;