const { PrismaClient } = require("@prisma/client");
const prisma = global.prisma || new PrismaClient();

const createProduct = async (req,res) => {
 const {name,description,amount} = req.body
 
  try {
    const Product = await prisma.product.create({
      data: {
        name,
        description,
        amount,
      },
    });
    res.status(201).json(Product); // Devuelve el nuevo producto creado
  } catch (error) {
    res.status(500).json({ error: "Error creando el producto" });
  }
};

const allProduct = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};
const deletProduct = async (name) => {
  return await prisma.product.delete({
    where: { name },
  });
};
const buscador = async (req, res) => {
  const {name} = req.params;
  try {
    const encontrado = await prisma.product.findMany({
      where: {
        name: name,
      },
    });
    console.log('Producto encontrado:', encontrado);
    res.status(200).json(encontrado);
  } catch (error) {
    console.error('Error buscando el producto:', error);
    res.status(500).json({ error: "Error buscando el producto" })
  }
};

module.exports = {
  createProduct,
  allProduct,
  deletProduct,
  buscador,
};
