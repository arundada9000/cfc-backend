import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.Controller.js";
import express from "express";
import { authMiddlware } from "../middlewares/auth.middleware.js";

export const productRouter = express.Router();

productRouter.use(authMiddlware)

productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.put("/:sn", updateProduct);
productRouter.delete("/:id", deleteProduct);
