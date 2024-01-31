const  {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const createProduct = async (name, details, amount) => {
  try {
    
    
    const newProduct = await prisma.product.create   ({
      data: {
        name,
        details,
        amount,
      },
    });
    return newProduct;  
  } catch (error ) {
    res.status(500).json({ error: "Error fetching products" })
}
};

const allProduct = async (req,res) => {
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
