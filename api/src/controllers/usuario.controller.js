const User = require("../models/user")
const bcrypt = require("bcryptjs")
const usuarioService = require("../service")

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
          const { senha } = req.body;
          const payloadUpdate = {};
    
          Object.assign(payloadUpdate, req.body);
    
          if (senha) {
            const newSenha = bcrypt.hashSync(senha, 10);
            Object.assign(payloadUpdate, { senha: newSenha });
          }
    
          await User.update(payloadUpdate, {
            where: { id },
          });
    
          const user = await User.findByPk(id);
    
          return res.status(200).json(user);
        } catch (error) {
          return res.status(500).json("Algo errado aconteceu. Upando")
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
          return res.status(500).json("Algo errado aconteceu. Deletando");
        }
      },

      async getAll(req, res) {
        try {
          const users = await User.findAll();
    
          return res.json(users);
        } catch (error) {
          console.log(error);
          return res.status(500).json("Algo errado aconteceu. Pegando geral.");
        }
      },
    
      async login(req, res) {
        try {
          const { id } = req.params;
          const user = await User.findByPk(id);
    
          return res.json(user);
        } catch (error) {
          return res.status(500).json("Algo errado aconteceu. Pegando um.");
        }
      },

}

module.exports = UsuarioController