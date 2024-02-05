const { createProduct } = require("../controllers/product.controllers.js");
const { productAll, deletProduct, found } = require("../controllers/product.controllers.js");

const allProduct = async (req, res) => {
  try {
    const products = await productAll(req, res);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error handling product search" });
  }
};
//!----------------------------------------------------------------------------------------------------
const productFound = async (req, res) => {
  try {
    
    const encontrado = await found(req,res)
    res.status(200).json(encontrado);
  } catch (error) {
    res.status(500).json({ error: "Error buscando el producto" });
  }
};
//!-----------------------------------------------------------------------------------------------------
const newProduct = async (req,res) => {
  try {
  
    const {name,description,amount} = req.body;

    res.status(200).json(  await createProduct(name,description,amount))
  } catch (error) {
    console.log({error});

    res.status(500).json({ error: error.message });
  }
};

//!-----------------------------------------------------------------------------------------------------

const productoDelete = async (req, res) => {
  try {
    const { name } = req.params;
    res.status(200).json(await deletProduct(name));
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
};

module.exports = {
  newProduct,
  allProduct,
  productoDelete,
  productFound,
};
