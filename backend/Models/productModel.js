// backend/Models/ProductModel.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  pricePerKg: Number,
  category: String,
  availableQuantityKg: Number,
  image: {
    data: Buffer,
    contentType: String,
  },
}, { timestamps: true });

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
