const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const indexRoute = require("./src/routes/indexRoute");
const alunoRoute = require("./src/routes/alunoRoute");


//Configuração da pasta estática
app.use(express.static(__dirname + "/public"));
//Configuração do template engine(ejs)
app.set("view engine", "ejs");
//Configuração do caminho das views
app.set("views", __dirname + "/src/views");
//Configuração para alterar métodos de requisição
app.use(methodOverride("_method"));
//Converter o body em objeto literal
app.use(express.json());
//Converter requisição para formato aceito pelo json
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/alunos", alunoRoute);



app.listen(port, ()=>{
    console.log("Estamos rodando na porta" + port)
})