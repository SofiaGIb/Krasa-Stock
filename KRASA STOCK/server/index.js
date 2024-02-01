const express = require("express");
const app = express();
const {
  allProduct,
  createProduct,
  deletProduct,
  buscador,
} = require("./controllers/product.controllers.js");
const { newProduct ,deleteProducto} = require("./handlers/product.handlers.js");
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get('/products/:name', buscador);
app.get("/products", allProduct);
app.post("/new", newProduct);
app.delete("/product/:name", deleteProducto);
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
