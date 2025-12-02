import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: {
    type: Number,
    required: true,
    unique: true
  },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
