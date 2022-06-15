import axios from 'axios';

interface SingUp {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: string,
    photo: string
};

const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
});

export const postSingUp = async ({name, email, password, confirmPassword, address, photo}: SingUp) => {
    try {
        const response = await baseUrl.post("/cadastros", {name, email, password, confirmPassword, address, photo})
        return response.data
    } catch {
        throw new Error("Não foi possivel realizar o cadastro")
    };
}