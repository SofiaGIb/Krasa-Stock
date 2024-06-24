const { createProduct } = require("../controllers/product.controllers.js");
const {
  productAll,
  deletProduct,
  found,
  stockChange,
  protegida
} = require("../controllers/product.controllers.js");

const protected = async (req, res) => {};
//!...............................................................
const allProduct = async (req, res) => {
  try {
    const products = await productAll(req, res);

    res.status(200);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//!----------------------------------------------------------------------------------------------------
const productFound = async (req, res) => {
  try {
    const encontrado = await found(req, res);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: "Error buscando el producto" });
  }
};
//!-----------------------------------------------------------------------------------------------------

const newProduct = async (req, res) => {
  try {
    const { name, description, amount } = req.body;
    if (!name || !amount)
      return res.status(400).json({
        message: "lOS CAMPOS NAME,DESCRIPTION Y AMOUNT DEBEN SER COMPLETADOS ",
      });

    const nuevoProducto = await createProduct(name, description, amount);
    res.status(200).json({ message: "PRODUCTO CREADO CON EXITO" });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: error.message });
  }
};
//!-----------------------------------------------------------------------------------------------------
const newAmount = async (req, res) => {
  try {
    const { name, amount } = req.body;
    if (!name || !amount) return res.status(400).json({ message: "Los campos son requeridos" });
    const newStock = await stockChange(name, amount);
    res.status(200).json({ message: "El stock fue modificado el nuevo stock es de", de: newStock });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: error.message });
  }
};
//!-----------------------------------------------------------------------------------------------------

const productoDelete = async (req, res) => {
  try {
    const { name } = req.params;
    console.log("Nombre del producto a eliminar:", name);
    res.status(200).json(await deletProduct(name));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
//!-----------------------------------------------------------------------------------------------------

module.exports = {
  newProduct,
  allProduct,
  productoDelete,
  productFound,
  newAmount,
  protected,
};
