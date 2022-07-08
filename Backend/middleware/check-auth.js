const jwt = require('jsonwebtoken');

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    console.log(req.headers)
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
   
    if (!token) {
      throw new Error('Authentication failed! null token');
    }
    const decodedToken = jwt.verify(token,  "pineapple");
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    console.log(req.headers.authorization)
    const error = new HttpError('Authentication failed! some error', 403);
    return next(error);
  }
};
