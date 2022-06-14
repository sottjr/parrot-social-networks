import { User } from "../models/user";
import bcrypt from "bcryptjs"

export class UsuarioService {

    async registerUser(data){
        const { senha } = data
    
        const newUser = await User.create({
            ...data,
            senha: this.criptoSenha(senha),
        
        })
    
        return newUser
    
    }
    
    criptoSenha(senha){
        const newSenha = bcrypt.hashSync( senha, 8)
        return newSenha
    }

}





