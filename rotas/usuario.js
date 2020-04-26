const init = db => {
    const express = require('express')
    const router = express.Router()

    const usuarioController = require('../controllers/usuario')

    router.get('/login', usuarioController.loginForm);
    router.get('/minhaconta', usuarioController.minhaConta);

    return router
}

module.exports = init