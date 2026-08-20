import { Router } from "express";
import { productController } from "../container";
const productRoutes = Router();

productRoutes.get("/", (req,res)=> productController.getProducts(res));

productRoutes.post("/",(req,res)=> productController.createProducts(req,res));

export default productRoutes;