const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 's3nh@root',
        database: 'devshop'
    }
})

db.on('query', query => {
    console.log('SQL: ', query.sql)
})

const app = require('./app')(db)

const port = process.env.PORT || 3000

const usuarioInicial = require('./models/usuario');
usuarioInicial.usuarioInicial(db)();

app.listen(port, (err) => {
    if (err) {
        console.log('Erro no servidor')
    } else {
        console.log('Servidor rodando')
    }
})