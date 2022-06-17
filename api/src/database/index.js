const Sequelize = require("sequelize");

const DB_NAME = "parrot_social";
const DB_USER = "root";
const DB_PASS = "sottjrdb";
const DB_CONFIG = {
  dialect: "mysql",
  host: "sottjr-db.cnmu2vzs9qad.sa-east-1.rds.amazonaws.com",
  port: "3306",
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;