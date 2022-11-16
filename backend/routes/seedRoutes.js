import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // returned all the products in product model and now it's time to create new products
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  // returned all the users in user model and now it's time to create new users
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
