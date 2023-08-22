const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: false },
    img: { type: String, required: false },
    categories: { type: Array },
    price: { type: Number, required: false },
   
  },
  { timestamps: false }
);

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;