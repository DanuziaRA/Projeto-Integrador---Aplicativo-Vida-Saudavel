const User = require("../models/User"); // Certifique-se de que o modelo está correto

// Cadastro de usuário
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de usuário
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    res.json({ message: "Login bem-sucedido!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

