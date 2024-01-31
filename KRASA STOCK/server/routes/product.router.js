const {getProduct} = import ('../handlers/product.handlers.js');
const {allProduct} = import ("../controllers/product.controllers.js")
const { Router } = require ('express')

const productsRouter =  Router() 
productsRouter.get =('/',allProduct, (req,res)=>{

    console.log("hola");
    res.send("hola desde la ruta /product") })


    module.exports = productsRouter