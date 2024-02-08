const { Router } = require('express')
const {amountUpdate} = require("../handlers/sale.handlers");
const saleRouter = Router();


saleRouter.post("/",amountUpdate)

module.exports =
    saleRouter
