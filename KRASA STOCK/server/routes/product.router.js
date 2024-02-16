const { Router } = require('express')

const { allProduct, productFound, productoDelete,newProduct} = require("../handlers/product.handlers.js");

const productRouter = Router()


productRouter.delete("/:name",productoDelete);
productRouter.get("/:name",productFound);
productRouter.get("/",allProduct);
productRouter.post('/',newProduct);

module.exports = productRouter;