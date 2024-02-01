const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProduct = async (name, description, amount) => {
  try {
    const Product = await prisma.product.create({
      data: {
        name,
        description,
        amount
      },
    });
    return Product;
  } catch (error) {
    console.log(error);
    throw error;
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
const deletProduct = async (name)=>{
  
  
 return  await prisma.product.delete({
    where:{  name}
  })
}


module.exports = {
  allProduct,
  createProduct,
  deletProduct
};
