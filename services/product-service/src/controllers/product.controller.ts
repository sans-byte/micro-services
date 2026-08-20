import type { Request, Response } from "express";
import type { ProductService } from "../services/product.service";
import type { Product } from "../types";

export default class ProductController {
    constructor(private productService: ProductService){}

    async getProducts(res: Response){
        const products = await this.productService.getProducts();
        res.status(200).json(products);
    }

    async createProducts(req:Request, res:Response){
        const data : Product = req.body;
        try {
            const product = await this.productService.createProducts(data);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                success:false,
                error: error instanceof Error ? error.message : "Failed to create product"
            })
        }
    }
}
