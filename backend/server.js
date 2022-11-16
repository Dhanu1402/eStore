import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

// to fetch variables in .env file
dotenv.config();

// connect to mongodb database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error.message);
  });

// function to call express app
const app = express();

// to parse json data in the body from momgoose
app.use('/api/seed', seedRouter);

app.use('/api/products', productRouter);

// two parameters are used url which is to be used and function which responds to the request i.e res = response req = request
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// define port that we will be getting the backend
const port = process.env.PORT || 1000;

// listen to the port means starting the server that will respond to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
