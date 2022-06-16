const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = require("../database/config/secret")

const AuthController = {
    async login(req, res){

        const {email, password} = req.body

        const usuario = await User.findOne({
            where:{
                email,
            }
        })

        if(!usuario){
            return res.status(400).json("Email não cadastrado")
        }

        if(!bcrypt.compareSync(password, usuario.password)){
            return res.status(401).json("Senha Inválida")
        }

        const token = jwt.sign(
            {
            id: usuario.id,
            name: usuario.name,
            email: usuario.email
            },
            secret.key
        )

        return res.json(token)
    }
}

module.exports = AuthController