const init = db => {
    const express = require('express');
    const router = express.Router();

    const usuarioController = require('../controllers/usuario');
    router.get('/login', usuarioController.loginForm);
    router.post('/login', usuarioController.login(db));
    router.get('/logout', usuarioController.logout);

    const homeController = require('../controllers/home');
    router.get('/', homeController.getIndex);

    const usuarioRouter = require('./usuario');
    router.use('/usuario', usuarioRouter(db));

    const produtoRouter = require('./produto');
    router.use('/produto', produtoRouter(db));

    const categoriaRouter = require('./categoria');
    router.use('/categoria', categoriaRouter(db));


    return router
}

module.exports = init