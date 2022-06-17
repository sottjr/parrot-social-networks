const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")
const AuthController = require("../controllers/authController")
//const auth = require("../middlewares/auth")

routes.post("/cadastrar", UsuarioController.create)

routes.post("/CadUser",UsuarioController.create )

module.exports = routes