const { Router } = require('express');
const productsRouter = require  ("./product.router");

const router = Router();
router.use("/products", productsRouter);
module.exports = router;
