const { PrismaClient } = require("@prisma/client");
const { format } = require('date-fns');
const prisma = new PrismaClient();



const sales = async (req, res) => {
  const { productName, total } = req.body;

  try {

  
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
        
        const newSale = await prisma.sale.create({
          data: {
            productName: productName,
            total: total,
          },
        });
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
   res.status(200).json( {message:"the sale was created successfully" ,sale:update});
  } catch (error) {
res.status(500).json({error:'error' + error.message})
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
