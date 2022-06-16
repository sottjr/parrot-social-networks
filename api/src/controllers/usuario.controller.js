const User = require("../models/user")
const bcrypt = require("bcryptjs")
const usuarioService = require("../service/UsuarioService")

 const UsuarioController = {
    async create(req, res) {
       
      try {
    
        const newUser = await usuarioService.registerUser(req.body)
    
        return res.status(201).json(newUser);
        
      } catch (error) {

          return res.status(500).json("Algo errado aconteceu. Criando");
      }
    },
    
    async update(req, res) {
      try {
        const { id } = req.params;
        const { password } = req.body;
        const payloadUpdate = {};
  
        Object.assign(payloadUpdate, req.body);
  
        if (password) {
          const newPassword = bcrypt.hashSync(password);
          Object.assign(payloadUpdate, { password: newPassword });
        }
  
        await User.update(payloadUpdate, {
          where: { id },
        });
  
        const user = await User.findByPk(id);
  
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu.Upando")
      }
    },

    async delete(req, res) {
      try {
        const { id } = req.params;
  
        await User.destroy({
          where: {
            id,
          },
        });
  
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu.Deletando");
      }
    },

    async getOne(req, res) {
      try {
        const { id } = req.params;
        const user = await User.findByPk(id);
  
        return res.json(user);
      } catch (error) {
        return res.status(500).json("Algo errado aconteceu,chame o batman!");
      }
    },

}

module.exports = UsuarioController