const { Router } = require('express');
const productsRouter = require  ("./product.router");
const saleRouter = require ("./sale.router")
const router = Router();
router.use("/products", productsRouter);
router.use("/sale",saleRouter);
module.exports = router;