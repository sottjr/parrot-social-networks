const express = require('express');
const controllerUser = require('./../controllers/controllerUser');
const router = express.Router();

router.post("/register", controllerUser.registerUser);

module.exports = routes