import ProductModel from "../Models/ProductModel.js";

// @desc Add product
export const addProduct = async (req, res) => {
  try {
    const { name, description, pricePerKg, category, availableQuantityKg } = req.body;
    const image = req.file;

    if (!name || !pricePerKg || !category || !availableQuantityKg || !image) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const newProduct = new ProductModel({
      name,
      description,
      pricePerKg,
      category,
      availableQuantityKg,
      image: {
        data: image.buffer,
        contentType: image.mimetype,
      },
    });

    await newProduct.save();
    res.status(201).json({ success: true, message: "Product added successfully" });
  } catch (err) {
    console.error("Add Product Error:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching products" });
  }
};

// @desc Delete product by ID
// export const deleteProduct = async (req, res) => {
//   try {
//     await ProductModel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ success: true, message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Error deleting product" });
//   }
// };

// @desc Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    // Deletes the document with the matching _id from MongoDB
    await ProductModel.findByIdAndDelete(req.params.id);

    // Responds with success message
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    // If any error occurs, catch it and respond with 500
    res.status(500).json({ success: false, message: "Error deleting product" });
  }
};

// @desc Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { name, description, pricePerKg, category, availableQuantityKg } = req.body;
    const image = req.file;

    const updateFields = {
      name,
      description,
      pricePerKg,
      category,
      availableQuantityKg,
    };

    // If a new image is uploaded, update it too
    if (image) {
      updateFields.image = {
        data: image.buffer,
        contentType: image.mimetype,
      };
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product updated successfully", data: updatedProduct });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ success: false, message: "Error updating product" });
  }
};
