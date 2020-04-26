const usuarioModel = require('../models/usuario');

const loginForm = (req, res) => {
    res.render('login');
}

const login = (db) => async(req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await usuarioModel.login(db)(email, senha);
        req.session.usuario = usuario;
        res.redirect('/');
    } catch (error) {
        res.send('Error: ' + error);
    }
}

const minhaConta = (req, res) => {
    res.render('usuario/minhaconta');
}

const logout = (req, res) => {
    req.session.destroy(() => {

    });

    res.redirect('/');
}

module.exports = {
    loginForm,
    login,
    minhaConta,
    logout
}