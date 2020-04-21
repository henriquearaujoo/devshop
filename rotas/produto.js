const init = db => {
    const express = require('express')
    const router = express.Router()

    const produtoController = require('../controllers/produto')

    router.get('/:id/:slug', produtoController.getProduto(db))

    return router
}

module.exports = init