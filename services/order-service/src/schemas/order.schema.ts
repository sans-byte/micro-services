import { z } from "zod";

export const createOrderSchema = z.object({
    productId: z.string().trim().min(1, "product id is required"),
    quantity: z.number().int().nonnegative("quantity must be non-negative integer"),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
