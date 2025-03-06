const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const db = { sequelize, Sequelize };
db.User = User;

User.init(sequelize, Sequelize);

module.exports = db;
