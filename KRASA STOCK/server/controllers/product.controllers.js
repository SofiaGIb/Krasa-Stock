const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productAll = async (req, res) => {
  try {
    const productsAll = await prisma.product.findMany({
      orderBy: {
        amount: "asc",
      },
    });
    return res.status(200).json(productsAll);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

//!-----------------------------------------------------------------------------------------------------
const found = async (req, res) => {
  const { name } = req.params;
  try {
    const product = await prisma.product.findFirst({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    res.status(200).json({ "El producto encontrado es" : product});
  } catch (error) {
    console.error("Error buscando el producto:", error);
    res.status(500).json({ error: "Error buscando el producto" });
  }
};
//!-----------------------------------------------------------------------------------------------------
const stockChange = async (name, amount) => {
  try {
    const newStock = await prisma.product.update({
      where: {
        name: name,
      },
      data:{
        amount :{

          increment :amount, 
        }
      }
    });
    return { success: true, newStock: newStock };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

//!-----------------------------------------------------------------------------------------------------
const createProduct = async (name, description, amount) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: name.trim(),
        description: description,
        amount: parseInt(amount),
      },
    });
    return { success: true, newProduct: newProduct };

  } catch (error) {
    console.log({ error });
  }
};

//!-----------------------------------------------------------------------------------------------------

const deletProduct = async (name) => {
  console.log(name);
  try {
    const product = await prisma.product.delete({
      where: { name: name },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
};

//!-----------------------------------------------------------------------------------------------------

module.exports = {
  createProduct,
  productAll,
  deletProduct,
  found,
  stockChange
};
