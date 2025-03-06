const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // ✅ Certifique-se de que esta linha existe!

// Rota de teste
router.get("/", (req, res) => {
  res.json({ message: "Rota de usuários funcionando!" });
});

// Rota de cadastro de usuário
router.post("/register", userController.registerUser); // ✅ Esta função precisa existir no userController.js

// Rota de login
router.post("/login", userController.loginUser); // ✅ Esta função precisa existir no userController.js

module.exports = router;
