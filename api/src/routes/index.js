const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")
routes.post("/CadUser",UsuarioController.create )
module.exports = routes