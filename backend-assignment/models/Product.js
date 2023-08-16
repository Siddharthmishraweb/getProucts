// models/Product.js
const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
   featureId: { type: String, required: true },
   featureName: { type: String, required: true },
   price: { type: Number, required: true },
 });
 
 const productSchema = new mongoose.Schema({
   productId: { type: String, required: true },
   productName: { type: String, required: true },
   features: [featureSchema],
 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
