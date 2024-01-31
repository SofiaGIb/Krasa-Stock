const { Router } = require('express');
const productsRouter = require  ("./product.router");

const router = Router();
router.use("/", productsRouter);
module.exports = router;
