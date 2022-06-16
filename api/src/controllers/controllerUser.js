import bcrypt from 'bcryptjs';
import User from "../models";


const controllerUser = {
    async register(req, res) {
        try {
            const {name, email, apartament, password, admin} = req.body;
            
        } catch (error) {
            return res.status(500).json("Ocorreu um erro")
        }
    },
}


module.exports = controllerUser;