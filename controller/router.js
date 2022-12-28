const homeHandle = require('./handleRouter/homeHandle')

const router = {
    'home': homeHandle.showHome,
    'create': homeHandle.createProduct,
    'edit': homeHandle.editProduct,
    'delete': homeHandle.deleteProduct,


}

module.exports = router;