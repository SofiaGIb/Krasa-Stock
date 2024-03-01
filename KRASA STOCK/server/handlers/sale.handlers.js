const {sales, salesAll} = require ("../controllers/sale.controllers")


const amountUpdate = async (req,res)=>{
    try {
      const result = await sales(req,res);
      res.status(200).json( {message:"la venta se creo con exito "});
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