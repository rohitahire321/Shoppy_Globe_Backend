import express from "express";
import mongoose from "mongoose";
import productRouter from "./Routes/routesProducts.js";
import cartRouter from "./Routes/routesCart.js";
import authRoutes from "./Routes/auth.js"

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/api/auth", authRoutes)

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/shoppy_globe")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});