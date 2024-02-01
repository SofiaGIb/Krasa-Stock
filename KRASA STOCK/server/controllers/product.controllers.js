const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProduct = async (name, description, amount) => {
  try {
    const Product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        amount:amount,
      },
    });
    return Product;
  } catch (error) {
    error;
    console.log(error);
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
module.exports = {
  allProduct,
  createProduct,
};
