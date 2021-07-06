var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  productID: Number,
  myrating: Number,
  mynotes: String
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  products: [productSchema]
})
let User = mongoose.model('User', userSchema)

router.get('/asdf', function(req,res,next) {
  res.json("test")
})

router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

module.exports = router;
