import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  // 1st parameter is user and 2nd parameter is secrect script to encrypt the data
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
