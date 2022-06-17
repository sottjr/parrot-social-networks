import axios from 'axios';

interface SingUp {
    name: string,
    email: string,
    password: string,
    address: string,
    photo: string
};

const baseURL = axios.create({
    baseURL: "http://localhost:3333"
});

export const postSingUp = async ({name, email, password, address, photo}: SingUp) => {
    try {
        const response = await baseURL.post("/cadastrar", {name, email, password, address, photo})
        return response.data
    } catch {
        throw new Error("Não foi possivel realizar o cadastro")
    };
}