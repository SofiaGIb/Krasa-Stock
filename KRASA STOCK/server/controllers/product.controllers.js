import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async (name, details, amount) => {
  const newProduct = await prisma.product.create({
    data: {
      name,
      details,
      amount,
    },
  });
  return newProduct;
};

export const allProduct = async () => {
  const products = await prisma.product.findMany();
  console.log("probando");
  return products;
};
module.exports = {
  allProduct,
  createProduct,
};
