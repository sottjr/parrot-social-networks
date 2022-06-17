const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")
const AuthController = require("../controllers/authController")
//const auth = require("../middlewares/auth")

routes.post("/cadastrar", UsuarioController.create)

routes.post("/login", AuthController.login)

routes.put("/atualizar/:user_id", UsuarioController.update)

routes.get("/getOne/:user_id", UsuarioController.getOne)
routes.get("/listar", UsuarioController.getAll)

routes.delete("/deletar/usuario/:user_id", UsuarioController.delete)

module.exports = routes