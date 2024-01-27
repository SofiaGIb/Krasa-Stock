import {allProduct,createProduct} from "../controllers/product.controllers"

 const getProduct = async (req,res) => {
    try {
        res.status(200).json(await allProduct(),console.log("hola"))
    } catch (error) { res.status(500).json(error,console.log("hola"))
        console.log("hola")
    }
 
 }
 const newProduct = async (req,res) =>{
try {
    const { name,details,amount } = req.body
    res.status(200).json(await createProduct())
} catch (error) { res.status(500).json(error)
    
}
 }


 module.exports ={
    getProduct
 }