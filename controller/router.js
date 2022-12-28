const homeHandle = require('./handleRouter/homeHandle')

const router = {
    'home': homeHandle.showHome,
    'create': homeHandle.createProduct,
    'delete': homeHandle.deleteProduct,
    'edit': homeHandle.editProduct,
    "search": homeHandle.searchProduct
}

module.exports = router;