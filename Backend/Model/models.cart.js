import mongoose from "mongoose";
import Counter from "./counter.js";

const cartSchema = new mongoose.Schema({
  cartId: Number,
  productId: Number,
  quantity: Number,
});

// Auto-increment middleware
cartSchema.pre("save", async function () {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: "cartId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.cartId = counter.seq;
  }
});

export default mongoose.model("Cart", cartSchema);
