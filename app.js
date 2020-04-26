const init = db => {
    const express = require('express');
    const app = express();
    const path = require('path');
    const bodyParser = require('body-parser');
    const session = require('express-session');
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: 'devshop',
        name: 'sessionId'
    }))

    const categoriaModel = require('./models/categoria')

    const rotas = require('./rotas')

    //Middleware, intercepta todas as requisições
    app.use(async(req, res, next) => {
        const categorias = await categoriaModel.getCategorias(db)();
        const { usuario } = req.session;
        res.locals = {
            categorias,
            usuario
        }
        next()
    })

    app.use(rotas(db))

    return app
}

module.exports = init