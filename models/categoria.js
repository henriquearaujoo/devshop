const slug = require('../utils/slug')

const getCategorias = (db) => async() => {
    const categorias = await db('categoria').select('*')
    const categoriaSlug = categorias.map(categoria => {
        const novaCategoria = {...categoria, slug: slug(categoria.categoria) }
        return novaCategoria
    })

    return categoriaSlug
}

const getCategoriaPorId = (db) => async(id) => {
    const categorias = await db('categoria').select('*').where({ id: id })

    return categorias[0]
}

module.exports = {
    getCategorias,
    getCategoriaPorId
}