const User = require("../models/user")
const bcrypt = require("bcryptjs")


const UsuarioService = {
    
    async registerUser(data){
        const { password } = data
        
        const newUser = await User.create({
            ...data,
            password: this.criptoSenha(password),
        
        }
        )
        console.log("aqui 1 ")
        return newUser
    
    },
    
    criptoSenha(password){
        const newSenha = bcrypt.hashSync( password)
        return newSenha
    }
}

module.exports = UsuarioService