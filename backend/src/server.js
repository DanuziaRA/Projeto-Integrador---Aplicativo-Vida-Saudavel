require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado.");
  app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
});
