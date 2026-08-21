import type { Request, Response } from "express";
import type { ProductService } from "../services/product.service";
import { createProductSchema } from "../schemas/product.schema";
import { Prisma } from "../generated/prisma/client";

export default class ProductController {
    constructor(private productService: ProductService){}

    async getProducts(req: Request, res: Response){
        try {
            const products = await this.productService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch products"
            });
        }
    }

    async getProductById(req:Request, res:Response){
        try {
            const id = req.params.id as string;
            const product = await this.productService.getProductById(id);
            if (!product) {
                res.status(404).json({
                    success: false,
                    error: "Product not found"
                });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch product"
            });
        }
    }

    async createProducts(req: Request, res: Response){
        const parsed = createProductSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({
                success: false,
                error: parsed.error.issues.map(issue => issue.message)
            });
            return;
        }

        try {
            const product = await this.productService.createProducts(parsed.data);
            res.status(201).json(product);
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                res.status(409).json({
                    success: false,
                    error: "A product with this sku already exists"
                });
                return;
            }
            res.status(500).json({
                success: false,
                error: "Failed to create product"
            });
        }
    }
}
