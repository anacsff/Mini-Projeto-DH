const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/AlunoController");

router.get("/", alunoController.index);
router.get("/:id", alunoController.show);
router.post("/", alunoController.store);
router.patch("/:id", alunoController.update)
router.put("/:id", alunoController.update)
router.delete("/:id", alunoController.destroy)




module.exports = router;