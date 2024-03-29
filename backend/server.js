import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

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

// to parse json data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

// to parse json data in the body from momgoose
app.use('/api/seed', seedRouter);

app.use('/api/products', productRouter);

app.use('/api/users', userRouter);

app.use('/api/orders', orderRouter);

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

// error handler code for userRoutes
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// it returns the current directory
const __dirname = path.resolve();
// to serve static files in the frontend build folder
app.use(express.static(path.join(__dirname, '/frontend/build')));
// to serve the index.html file in the frontend build folder
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// define port that we will be getting the backend
const port = process.env.PORT || 1000;

// listen to the port means starting the server that will respond to frontend
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
