const {expressjwt} = require("express-jwt")
const secret = require("../database/config/configs/secret")

module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
})