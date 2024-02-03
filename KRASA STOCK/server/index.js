const express  = require("express");
const { allProduct, productFound, productoDelete } = require("./handlers/product.handlers.js");
const app = express();
const port = 3001;


app.delete("/products/:name",productoDelete)
app.get("/products/:name",productFound)
app.get(`/products`,allProduct)
app.get("/",(req,res)=>{res.send("hola mundo")})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
  