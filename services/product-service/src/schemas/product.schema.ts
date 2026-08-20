import { z } from "zod";

export const createProductSchema = z.object({
    sku: z.string().trim().min(1, "sku is required"),
    name: z.string().trim().min(1, "name is required"),
    description: z.string().trim().min(1).nullish(),
    price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'price must be a non-negative number string like "199.99"'),
    stock: z.number().int().nonnegative("stock must be a non-negative integer"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
