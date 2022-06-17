const User = require("../models/user")
//const bcrypt = require("bcryptjs")
const usuarioService = require("../service/UsuarioService")

 const UsuarioController = {
    async create(req, res) {
  
      try {

      const newUser = await usuarioService.registerUser(req.body)

      return res.status(201).json(newUser)
        
      } catch (error) {

        return res.status(500).json("Algo errado aconteceu. Criando");
      }
    },
    
    async update(req, res) {
      try {
        const { user_id } = req.params
        console.log(user_id)
        const { name, email, apartment } = req.body

        const usuarioAtualizado = await User.update(
          {
            name,
            email,
            apartment,
          },
          {
            where:{
              user_id,
            }
          }
        )


        return res.status(200).json(usuarioAtualizado);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu.Upando")
      }
    },

    async delete(req, res) {
      try {
        const { user_id } = req.params;
  
        await User.destroy({
          where: {
            user_id,
          },
        });
  
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu.Deletando");
      }
    },

    async getAll(req,res){
      try{
        const usuarios = await User.findAll()
        return res.json(usuarios)
      } catch (error){
        return res.status(500).json("Algo deu errado com ao buscar todos os usuarios")
      }
    },

    async getOne(req, res) {
      try {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id);
  
        return res.json(user);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu.");
      }
    },

}

module.exports = UsuarioController