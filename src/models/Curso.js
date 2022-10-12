const db = require("../config/sequelize");
const Sequelize = require("sequelize");
const Aluno = require("./Aluno");


const Curso = db.define("Curso", {
    id:{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_curso:{
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },
}, {})

Curso.hasMany(Aluno, {
    foreignKey: "curso_id",
  });
Aluno.belongsTo(Curso, {
    foreignKey: "curso_id",
});

module.exports = Curso;