const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")
const PostController = require("../controllers/postController")
const AuthController = require("../controllers/authController")
//const auth = require("../middlewares/auth")

routes.post("/cadastrar", UsuarioController.create)
routes.post("/login", AuthController.login)

routes.put("/atualizar/:user_id", UsuarioController.update)
routes.get("/getOne/:user_id", UsuarioController.getOne)
routes.get("/listar", UsuarioController.getAll)
routes.delete("/deletar/usuario/:user_id", UsuarioController.delete)

routes.post("/CadUser",UsuarioController.create);
routes.post("/posts/create", PostController.createPost);
routes.get("/posts/list", PostController.listingPost);
routes.delete("/posts/delete/:id", PostController.deletePost);
routes.put("/posts/update/:id", PostController.updatePost);

module.exports = routes