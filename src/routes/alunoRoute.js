const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunoController");

router.get("/editar/:id", alunoController.edit)
router.get("/", alunoController.index);
router.get("/:id", alunoController.show);
router.get("/criar", alunoController.create)
router.get("/excluir/:id", alunoController.delete)

router.post("/criar", alunoController.store);

router.put("/editar/:id", alunoController.update)
router.patch("/editar/:id", alunoController.update)

router.delete("/excluir/:id", alunoController.destroy)




module.exports = router;