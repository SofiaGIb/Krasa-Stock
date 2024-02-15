const {sales} = require ("../controllers/sale.controllers")


const amountUpdate = async (req,res)=>{
    try {
      res.status(200).json(await sales(req,res));
      
    } catch (error) {
      
      console.log(error);
      res.status(500).json(error);
  
    }
  }
  
  module.exports = {
    amountUpdate}