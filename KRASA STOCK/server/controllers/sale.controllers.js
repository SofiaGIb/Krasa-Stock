
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
 
const sales = async(req,res) =>{
    try {
        const { productName, total } = req.body;

        const newSale = await prisma.sale.create({
          data: {
            productName : productName,
            total :total,
            date: new Date()
            
          }
        }
        ); 
        
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
      return update;


     
    } catch (error) {
      console.log(error);
    }
    }
    module.exports = {
      sales,
    }