const {getProduct} = require ('../handlers/product.handlers.js')
const { Router } = require('express')

const productsRouter =  Router() 
productsRouter.get =('/',getProduct, (req,res)=>{

    console.log("hola");
    res.send("hola desde la ruta /product") })


    module.exports = productsRouter