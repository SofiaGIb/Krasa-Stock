import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createProduct = async (name, details, amount) => {
  const newProduct = await prisma.product.create({
    data: {
      name,
      details,
      amount,
    },
  });
  return newProduct;
};

const allProduct = async () => {
  const products = await prisma.product.findMany();
  return products;
};
module.exports = {
  allProduct,
  createProduct,
};
