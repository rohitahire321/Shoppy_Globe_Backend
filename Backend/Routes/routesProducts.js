import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  changeDetails
} from "../Controller/controller.products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductsById);
router.put("/:id", changeDetails)

export default router;