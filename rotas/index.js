const init = db => {
    const express = require('express')
    const router = express.Router()

    const homeController = require('../controllers/home')
    router.get('/', homeController.getIndex)

    const produtoRouter = require('./produto')
    router.use('/produto', produtoRouter(db))

    const categoriaRouter = require('./categoria')
    router.use('/categoria', categoriaRouter(db))

    return router
}

module.exports = init