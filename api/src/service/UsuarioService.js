const User = require("../models/user")
const bcrypt = require("bcryptjs")


class UsuarioService {

    async registerUser(data){
        const { password } = data
        console.log("aqui")
        const newUser = await User.create({
            ...data,
            password: this.criptoSenha(password),
        
        })
        
        return newUser
    
    }
    
    criptoSenha(password){
        const newSenha = bcrypt.hashSync( password)
        return newSenha
    }
}

module.exports = UsuarioService