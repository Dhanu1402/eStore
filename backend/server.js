import express from 'express';
import data from './data.js';

// function to call express app
const app = express();

// two parameters are used url which is to be used and function which responds to the request i.e res = response req = request
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// define port that we will be getting the backend
const port = process.env.PORT || 1000;

// listen to the port means starting the server that will respond to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
