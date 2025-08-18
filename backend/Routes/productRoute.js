import express from "express";
import multer from "multer";
// import { addProduct, getAllProducts, deleteProduct } from "../Controllers/ProductController.js";
import { addProduct, getAllProducts, deleteProduct, updateProduct } from "../Controllers/ProductController.js";

const router = express.Router();

// Image upload (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// delete product
// router.delete("/delete/:id", deleteProduct);
router.delete("/delete/:id", deleteProduct);

// update the product
router.put("/update/:id", upload.single("image"), updateProduct);



// Routes
router.post("/add", upload.single("image"), addProduct);
router.get("/all", getAllProducts);
router.delete("/delete/:id", deleteProduct);

export default router;
