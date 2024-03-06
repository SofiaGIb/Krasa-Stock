const {sales, salesAll} = require ("../controllers/sale.controllers")


const amountUpdate = async (req,res)=>{
      const result = await sales(req,res);
    } 
  const totalSale = async (req, res) => {
    try {
      const allSales = await salesAll(req, res);
      res.status(200);
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  module.exports = {
    amountUpdate, totalSale}