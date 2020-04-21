const getProdutos = (db) => async(id) => {
    const produtos = await db('produto').select('*').where('id', function() {
        this.select('categoria_produto.produto_id')
            .from('categoria_produto')
            .whereRaw('categoria_produto.produto_id = produto.id')
            .where('categoria_id', id)
    })

    return produtos
}

const getProdutoPorId = (db) => async(id) => {
    const produtos = await db('produto').select('*').where({ id: id })

    return produtos[0]
}

module.exports = {
    getProdutos,
    getProdutoPorId
}