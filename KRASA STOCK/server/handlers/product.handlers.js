const { createProduct, allProduct,deleteProduct } = import("../controllers/product.controllers.js");

const getProduct = async (req, res) => {
  try {
      res.status(200).json(await allProduct(), );
} catch (error) {
    res.status(500).json(error,         );
    ;
  }
};
const newProduct = async (req, res) => {
  try {
    const { name, description, amount } = req.body;
 res.status(200).json(await createProduct(name,description,amount))
} catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
  }
};

const deleteProducto = async (req,res)=>{
  try {
    const {name} = req.body;
res.status(200).json(await deleteProduct(name))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)

  }
}

 module.exports ={
    getProduct, newProduct,deleteProducto
 }