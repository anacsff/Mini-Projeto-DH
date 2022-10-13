const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunoController");

router.get("/alunos", alunoController.index);
router.get("/aluno/:id", alunoController.show);
router.post("/aluno", alunoController.store);
router.patch("/aluno/editar/:id", alunoController.update)
router.put("/aluno/editar/:id", alunoController.update)
router.delete("/aluno/excluir/:id", alunoController.destroy)




module.exports = router;