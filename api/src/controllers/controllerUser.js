import bcrypt from 'bcryptjs';
import { User } from "../models";


const controllerUser = {
    async register(req, res) {
        try {
            const {name, email, apartment, password, admin} = req.body 
            const newPassword = bcrypt.hashSync (password, 10)
            const newUser = await User.create({
                name,
                email,
                apartment,
                password: newPassword,
                admin,
            })

            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(error).json
        }
    },
}


module.exports = controllerUser;