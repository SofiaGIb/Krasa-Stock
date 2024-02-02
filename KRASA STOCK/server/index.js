const express = require("express");
const app = express();

const { newProduct ,productoDelete,productFound,allProduct} = require("./handlers/product.handlers.js");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get('/products/:name', productFound);//trae el indicado
app.get("/products", allProduct);//trae todos 
app.post("/new", newProduct);
app.delete("/product/:name", productoDelete); //elimina producto
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
