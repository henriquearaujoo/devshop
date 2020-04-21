const produtoModel = require('../models/produto')
const categoriaModel = require('../models/categoria')

const getProdutosPorCategoria = db => async(req, res) => {
    const produtos = await produtoModel.getProdutos(db)(req.params.id)
    const categoria = await categoriaModel.getCategoriaPorId(db)(req.params.id)
    res.render('produtos', {
        produtos,
        categoria
    })
}

const getProduto = db => async(req, res) => {
    const produto = await produtoModel.getProdutoPorId(db)(req.params.id)

    res.render('produto-detalhe', {
        produto
    })
}

module.exports = {
    getProdutosPorCategoria,
    getProduto
}