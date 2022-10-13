const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunoController");

router.get("/editar/:id", alunoController.update)
router.get("/", alunoController.index);
router.get("/:id", alunoController.show);
router.get("/criar", alunoController.store)
router.get("/excluir/:id", alunoController.destroy)

router.post("/criar", alunoController.store);

router.patch("/editar/:id", alunoController.update)
router.put("/editar/:id", alunoController.update)

router.delete("/excluir/:id", alunoController.destroy)




module.exports = router;