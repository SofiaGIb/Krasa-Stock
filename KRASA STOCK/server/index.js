


const express = require('express');
const { allProduct, createProduct, deletProduct } = require('./controllers/product.controllers.js');
const app = express();
const port = 3001;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products',allProduct)
app.post('/new',createProduct)
app.delete('/product:name',deletProduct)
app.listen(port,() => {
  console.log(`Server is listening at http://localhost:${port}`);
});
