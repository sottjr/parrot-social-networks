const supertest = require("supertest")
const app = require("../app")

describe("Teste de integração com a API", ()=>{
    test("Recuperando todos os usuários", async ()=>{
        const res = await supertest(app).get("/listar")
        expect(res.status).toBe(200)
    }),

    test("Recuperando um usuario", async ()=>{
        const res = await supertest(app).get('/getOne/1')
        expect(res.status).toBe(200)
    }),

    test("Fazendo login", async ()=>{
        const res = await supertest(app).post("/login").send({
            email:"teste@teste.com",
            password: "123456789"
        })
        expect(res.status).toBe(200)
    }),

    test("Criando Usuário", async ()=>{
        const res = await supertest(app).post("/cadastrar").send({
            name: "Moura",
            email: "jhm@jhm.com",
            apartment: "456",
            password: "987654321"
        })
        expect(res.status).toBe(201)
    })

//    test("Atualizar usuário", async()=>{
//        const res = await supertest(app).put("/atualizar/4").//send({
//            name: "testando"
//        })
//        expect(res.status).toBe(200)
//    })

})