const db = require("../config/sequelize");
const Aluno = require("../models/Aluno");
const { Op } = require("sequelize"); 


const alunoController = {
    index: async (req, res) => {
        const { search } = req.query;
        try {
            //RAW QUERY
            // const alunos = await db.query(
            //     "SELECT * FROM alunos;", {
            //         type: Sequelize.QueryTypes.SELECT,
            //     }
            // );
            let where = {};
            if(search){
                where = {
                    nome: {
                        [Op.like]: `%${search}%`,
                    },
                } 
            }
            const alunos = await Aluno.findAll({
                where,
                limit: 10,
                order: [
                    ["nome", "ASC"], 
                    ["data_nascimento", "ASC"]
                ]
            });
            
            res.status(200).json({ data: alunos, message: "Busca realizada com sucesso!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao buscar alunos"});
        }
    },
    show: async (req, res) => {
        
        const {id} = req.params;
        try {
            //RAW QUERY
            // const alunos = await db.query(`SELECT * FROM alunos WHERE id = :id`, {
            //     replacements:{
            //         id,
            //     },
            //     type: Sequelize.QueryTypes.SELECT,

            // });

            const aluno = await Aluno.findOne({
                where: {
                    id,
                },
            });

            console.log(aluno)
            if(!aluno){
                throw Error("Nenhum aluno encontrado");
            };
            res.status(200).json({data: aluno});
        } catch (error) {
            console.log(error);
            if(error.message === "STUDENT_NOT_FOUND"){
                res.status(400).json({message: "Aluno não encontrado"});
            }else{
                res.status(400).json({message: "Erro ao buscar aluno"});
            }

        }
    },
    store: async (req, res) => {
        const { nome, email, data_nascimento, celular, curso_id } = req.body;
        try {
            //RAW QUERY
            // const alunos = await db.query(`INSERT INTO alunos (nome, email, data_nascimento, celular, curso_id) 
            // VALUES (:nome, :email, :data_nascimento, :celular, :curso_id)`, {
            //     replacements: {
            //         nome, email, data_nascimento, celular, curso_id
            //     },
            //         type: Sequelize.QueryTypes.INSERT,
            // });

            const alunos = await Aluno.create({
                nome,
                email,
                data_nascimento,
                celular,
                curso_id
            });

            res.status(201).json({message: "Aluno matriculado com sucesso!"});
            console.log(alunos);
        } catch (error) {
            res.status(400).json({ message: "Erro ao matricular aluno"});
        }
    },
    update: async (req, res) => {
        const { nome, email, data_nascimento, celular, curso_id} = req.body;
        const {id} = req.params;
        try {
            if (!nome && !email && !data_nascimento && !celular && !curso_id){
                throw Error("Nenhuma informação para atualizar");
            }
            //RAW QUERY
            // let query = "UPDATE alunos SET ";
            
            // if(nome) query += "nome = :nome";
            // if(email) {
            //     if(nome) query += ", ";
            //     query += "email = :email";
            // };
            // if(data_nascimento) {
            //     if(nome || email) query += ", ";
            //     query += "data_nascimento = :data_nascimento";
            // };
            // if(celular) {
            //     if(nome || email || data_nascimento) query += ", ";
            //     query += "celular = :celular";
            // };
            // if(curso_id) {
            //     if(nome || email || data_nascimento || celular) query += ", ";
            //     query += "curso_id = :curso_id"
            // };
            // query += " WHERE id = :id";

            // const alunos = db.query(query, {
            //     replacements: {
            //         nome, email, data_nascimento, celular, curso_id, id},
            //     type: Sequelize.QueryTypes.UPDATE,
            // });

            const alunos = await Aluno.update({
                nome, 
                email,
                data_nascimento,
                celular,
                curso_id,
            },{
                where: {id},
            });
            console.log(alunos);
            res.status(200).json({message: "Matricula alterada com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao alterar matricula do aluno"});
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            //RAW QUERY
            // const alunos = await db.query("DELETE FROM alunos WHERE id = :id", {
            //     replacements: { id },
            //     type: Sequelize.QueryTypes.DELETE,
            // });

            const alunos = await Aluno.destroy({
                where: {id}
            });
            console.log(alunos);
            res.status(200).json({ message: "Aluno deletado com sucesso!" });
            } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao deletar aluno" });
        }
            
        
    },
};
module.exports = alunoController;