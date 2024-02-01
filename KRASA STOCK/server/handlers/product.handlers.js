const { createProduct, allProduct } = import("../controllers/product.controllers.js");

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
    const datos = { name, description, amount } = req.body;
    console.log(datos);
 res.status(200).json(await createProduct(name,description,amount))
res.status(201).json({message:'producto creado',product :newProduct})
} catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error);
  }
};



 module.exports ={
    getProduct, newProduct
 }