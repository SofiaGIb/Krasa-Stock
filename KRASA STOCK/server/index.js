


const express = require('express');
const { allProduct, createProduct } = require('./controllers/product.controllers.js');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products',allProduct)
app.post('/products',createProduct)
app.listen(port,() => {
  console.log(`Server is listening at http://localhost:${port}`);
});
