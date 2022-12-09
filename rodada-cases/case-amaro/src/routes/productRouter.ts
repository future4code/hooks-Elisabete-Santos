import express from 'express';
import { ProductController } from '../controller/productController';

export const productRouter = express.Router();
const productController = new ProductController();

productRouter.post("/insert", productController.insertProduct);
productRouter.get("/:id", productController.getProductById);
productRouter.get("/getAll", productController.getAllProducts);