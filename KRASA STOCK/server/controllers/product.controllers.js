const { PrismaClient } = require("@prisma/client");
const prisma = global.prisma || new PrismaClient();

const createProduct = async (req, res) => {
  const { name, description, amount } = req.body;

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

const productAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: "Error fetching products" });
  }
};
const deletProduct = async (name) => {
  return await prisma.product.delete({
    where: { name },
  });
};
const found = async (req, res) => {
  const name = req.params;
  try {
    
    const encontrado = await prisma.product.findFirst({
      where: {
        name: name,
      },
    });

    res.status(200).json( {message: "Producto encontrado", data: encontrado} );
  } catch (error) {
    console.error("Error buscando el producto:", error);
    res.status(500).json({ error: "Error buscando el producto" });
  }
};

module.exports = {
  createProduct,
  productAll,
  deletProduct,
  found,
};
