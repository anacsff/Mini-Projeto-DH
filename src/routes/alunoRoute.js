const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunoController");

router.get("/alunos", alunoController.index);
router.get("/aluno/:id", alunoController.show);
router.post("/aluno", alunoController.store);
router.patch("/aluno/:id", alunoController.update)
router.put("/aluno/:id", alunoController.update)
router.delete("/aluno/:id", alunoController.destroy)




module.exports = router;