const { Router } = require('express')
const {amountUpdate, totalSale} = require("../handlers/sale.handlers");
const saleRouter = Router();


saleRouter.post("/",amountUpdate)
saleRouter.get("/",totalSale)
module.exports =
    saleRouter
