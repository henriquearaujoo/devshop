const init = db => {
    const express = require('express')
    const app = express()
    const path = require('path')
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname, 'public')))

    const categoriaModel = require('./models/categoria')

    const rotas = require('./rotas')

    //Middleware, intercepta todas as requisições
    app.use(async(req, res, next) => {
        const categorias = await categoriaModel.getCategorias(db)()

        res.locals = {
            categorias
        }
        next()
    })

    app.use(rotas(db))

    return app
}

module.exports = init