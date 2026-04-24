// Import cloudinary library for image uploads
import { v2 as cloudinary } from "cloudinary";

// Import Mongoose product model
import productModel from "../models/productModel.js";


// ----------------------
// 1 Function: Add Product
// ----------------------
const addProduct = async (req, res) => {
  try {
    // Destructure product details from request body
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Get the uploaded images from the request
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // Filter out any undefined images
    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    // Upload each image to Cloudinary and store their URLs
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Create product data object for database entry
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes), // Convert sizes from JSON string to array
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    // Create a new product document and save it to MongoDB
    const product = new productModel(productData);
    await product.save();

    // Send success response
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// ----------------------
// 2 Function: List All Products
// ----------------------
const listProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// ----------------------
// 3 Function: Remove a Product by ID
// ----------------------
const removeProduct = async (req, res) => {
  try {
    // Find the product by ID and delete it
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// ----------------------
// 4 Function: Get Single Product by ID
// ----------------------
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    // Find product by its ID
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Export all functions for use in routes
export { listProducts, addProduct, removeProduct, singleProduct };
