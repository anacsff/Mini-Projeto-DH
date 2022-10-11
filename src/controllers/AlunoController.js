const Sequelize = require("sequelize");
const configDB = require("../config/database");
//Inicializando a classe do Sequelize para lidar com o Banco de Dados
const db = new Sequelize(configDB);

const alunos = [{
    id: 1,
    nome: "Ana Carolina de Souza Fonseca",
    data: "08/10/1998",
    telefone: "(11)93469-8231",
    email: "anacsfonseca@hotmail.com.br",
    curso: "Desenvolvimento Web"
},
{
    id: 2,
    nome: "Ana Carolina de Souza Fonseca",
    data: "08/10/1998",
    telefone: "(11)93469-8231",
    email: "anacsfonseca@hotmail.com.br",
    curso: "Desenvolvimento Web"
},
{ 
    id: 3,
    nome: "Ana Carolina de Souza Fonseca",
    data: "08/10/1998",
    telefone: "(11)93469-8231",
    email: "anacsfonseca@hotmail.com.br",
    curso: "Desenvolvimento Web"
},
]



const alunoController = {
    index: async (req, res) => {
        // return res.render("aluno", { title: "Lista de Alunos", alunos: alunos});

        try {
            const alunos = await db.query(
                "SELECT * FROM alunos;", {
                    type: Sequelize.QueryTypes.SELECT,

                }
            );
            res.status(200).json({ data: alunos, message: "Busca realizada com sucesso!"});
        } catch (error) {
            console.log(error);
            res.status(400).json({message: "Erro ao buscar alunos"});
        }
    },
    show: async (req, res) => {
        // const { id } = req.params;
        // const alunoResult = alunos.find((aluno) => aluno.id === parseInt(id));
        // if(!alunoResult){
        //     return res.send("Aluno não encontrado!")
        // }
        const {id} = req.params;
        try {
            const alunos = await db.query(`SELECT * FROM alunos WHERE id = :id`, {
                replacements:{
                    id,
                },
                type: Sequelize.QueryTypes.SELECT,

            });
            console.log(alunos)
            if(alunos.length === 0){
                throw Error("STUDENT_NOT_FOUND")
            }
            res.status(200).json({data: alunos[0]});
        } catch (error) {
            console.log(error);
            if(error.message === "STUDENT_NOT_FOUND"){
                res.status(400).json({message: "Aluno não encontrado"});
            }else{
                res.status(400).json({message: "Erro ao encontrar aluno"});
            }

        }
    },
    store: async (req, res) => {
        const { nome, email, data_nascimento, celular, curso_id } = req.body;
        try {
            const alunos = await db.query(`INSERT INTO alunos (nome, email, data_nascimento, celular, curso_id) 
            VALUES (:nome, :email, :data_nascimento, :celular, :curso_id)`, {
                replacements: {
                    nome, email, data_nascimento, celular, curso_id
                },
                    type: Sequelize.QueryTypes.INSERT,
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
            let query = "UPDATE alunos SET ";
            
            if(nome) query += "name = :name";
            if(email) {
                if(nome) query += ", ";
                query += "email = :email";
            };
            if(data_nascimento) {
                if(nome || email) query += ", ";
                query += "data_nascimento = :data_nascimento";
            };
            if(celular) {
                if(nome || email || data_nascimento) query += ", ";
                query += "celular = :celular";
            };
            if(curso_id) {
                if(nome || email || data_nascimento || celular) query += ", ";
                query += "curso_id = :curso_id"
            };
            query += " WHERE id = :id";

            const alunos = db.query(query, {
                replacements: {
                    nome, email, data_nascimento, celular, curso_id, id},
                type: Sequelize.QueryTypes.UPDATE,
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
        const alunos = await db.query("DELETE FROM alunos WHERE id = :id", {
            replacements: { id },
            type: Sequelize.QueryTypes.DELETE,
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