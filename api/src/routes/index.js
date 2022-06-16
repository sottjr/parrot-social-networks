const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")

const AuthController = require("../controllers/authController")

routes.post("/CadUser", UsuarioController.create)

routes.post("/login", AuthController.login)

//routes.post("/newpost", auth)

module.exports = routes