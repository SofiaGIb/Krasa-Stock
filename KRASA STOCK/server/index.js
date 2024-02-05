const express  = require("express");
const { allProduct, productFound, productoDelete,newProduct} = require("./handlers/product.handlers.js");
const app = express();
const port = 3001;


app.delete("/delete/:name",productoDelete);
app.get("/products/:name",productFound);
app.get(`/products`,allProduct);
app.post('/products',newProduct)
app.get("/",(req,res)=>{res.send("hola mundo")})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
  