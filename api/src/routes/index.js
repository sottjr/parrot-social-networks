const express = require("express")
const routes = express.Router()
const UsuarioController = require("../controllers/usuario.controller")
const PostController = require("../controllers/postController")


routes.post("/CadUser",UsuarioController.create);
routes.post("/posts/create", PostController.createPost);
routes.get("/posts/list", PostController.listingPost);
routes.delete("/posts/delete/:id", PostController.deletePost);
routes.put("/posts/update/:id", PostController.updatePost);



module.exports = routes