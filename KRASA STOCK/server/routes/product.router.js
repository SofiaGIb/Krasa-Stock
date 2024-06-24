const { Router } = require('express')

const {protected, allProduct, productFound, productoDelete,newProduct,newAmount} = require("../handlers/product.handlers.js");

const productRouter = Router()


productRouter.delete("/:name",productoDelete);
productRouter.get("/:name",productFound);
productRouter.get("/",allProduct);
productRouter.post('/',newProduct);
productRouter.patch('/',newAmount)
productRouter.get('/protected',protected)
module.exports = productRouter;