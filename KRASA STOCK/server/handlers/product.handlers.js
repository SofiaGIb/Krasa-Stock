const {createProduct} = require ('../controllers/product.controllers.js')
const {  allProduct, deleteProduct ,buscador} = require(
  "../controllers/product.controllers.js"
);

const getProduct = async (req, res) => {
  try {
    res.status(200).json(await allProduct());
  } catch (error) {
    res.status(500).json(error);
  }
};

const encontrado = async (req, res) => {
  try {
    res.status(200).json(productoEncontrado);
  } catch (error) {
    res.status(500).json({ error: "Error buscando el producto" });
  }
};
const newProduct = async (req,res) => {
  try {
    await createProduct(req,res );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { name } = req.body;
    res.status(200).json(await deleteProduct(name));
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  newProduct,
  getProduct,
  deleteProducto,
  encontrado,
};
