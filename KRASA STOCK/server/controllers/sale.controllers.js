const { PrismaClient } = require("@prisma/client");
const { format } = require("path");
const prisma = new PrismaClient();

const sales = async (req, res) => {
  const { productName, total } = req.body;
const format = (date,locale,options)=> new Intl.DateTimeFormat(locale,options).format(date)
const now = new Date()
const date = format(now,"es")
  try {

  const newSale = await prisma.sale.create({
    data: {
      productName: productName,
      total: total,
      date:date
    },
  });


     const product = await prisma.product.findUnique({
         where: {
           name: productName,
         },
       });
       if (!product) {
         return res.status(404).json({ error: 'Product not found' });
       }

       if (product.amount < total) {
        return res.status(400).json({ error: 'Insufficient stock' });
       }

   const update = await prisma.product.update({
     where:{
       name:productName,
     },
   data:{
       amount :{
         decrement:total,
       }
     },
   });
   return  update;

} catch (error) {
   console.log(error);
 } }
//!........................................................
const salesAll = async (req, res) => {
  try {
    const allSales = await prisma.sale.findMany({
      orderBy: {
        total: "asc",
      },
    });
    return res.status(200).json(allSales);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

module.exports = {
  salesAll,
  sales,
};
