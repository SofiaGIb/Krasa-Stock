const { Router } = require('express');
const productsRouter = require  ("./product.router");
const saleRouter = require ("./sale.router")
const userRouter = require ('./user.router')

 
const router = Router();
router.use("/products", productsRouter);
router.use("/sale",saleRouter);
router.use ("/User" ,userRouter)
module.exports = router;