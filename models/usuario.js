const bcryptjs = require('bcryptjs');

const getSenhaCriptografada = senha => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(senha, salt);
    return hash;
}

const usuarioInicial = (db) => async() => {
    const count = await db('usuario').count('id as total');

    if (count[0].total === 0) {
        const usuario = {
            nome: 'Admin',
            email: 'admin@devshop.com',
            senha: getSenhaCriptografada('123'),
            email_checkado: true,
            data_criacao: new Date(),
            data_atualizacao: new Date(),
            regras: 'admin, financeiro, cliente'
        }

        await db('usuario').insert(usuario);
    }
}

const login = (db) => async(email, senha) => {
    const usuario = await db('usuario').select('*').where('email', email);
    if (usuario.length <= 0) {
        throw new Error('Usuário inválido');
    }

    if (!bcryptjs.compareSync(senha, usuario[0].senha)) {
        throw new Error('Usuário inválido')
    }

    return usuario[0];
}

module.exports = {
    usuarioInicial,
    login
}