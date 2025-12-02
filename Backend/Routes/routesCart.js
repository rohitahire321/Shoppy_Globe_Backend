import express from "express";
import {protect} from "../Middlewares/auth.js"
import {
  addToCart,
  updateCart,
  deleteCart,
} from "../Controller/controller.cart.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

export default router;
