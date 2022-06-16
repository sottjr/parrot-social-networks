const expressJWT = require("express-jwt");
const secret = require("../database/config/secret");
console.log(typeof(expressJWT))

module.exports = expressJWT({
    secret: secret.key,
    algorithms: ["HS256"],
});
console.log(typeof(expressJWT))