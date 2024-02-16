const {sales, salesAll} = require ("../controllers/sale.controllers")


const amountUpdate = async (req,res)=>{
    try {
      const result = await sales(req,res);
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      
      console.log(error);
      res.status(500).json(error);
      
    }
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