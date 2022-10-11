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
    index: (req, res) => {
        return res.render("aluno", { title: "Lista de Alunos", alunos: alunos});
    },
    show: (req, res) => {
        const { id } = req.params;
        const alunoResult = alunos.find((aluno) => aluno.id === parseInt(id));
        if(!alunoResult){
            return res.send("Aluno não encontrado!")
        }
        return res.send("Aluno encontrado")
    },
    store: (req, res) => {

    },
    update: (req, res) => {

    },

    destroy: (req, res) => {

    },
            
    
};

module.exports = alunoController;