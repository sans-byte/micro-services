import { z } from "zod";

export const createOrderRequest = z.object({
  productId: z.string().trim().min(1, "product id is required"),
  quantity: z
    .number()
    .int()
    .positive("quantity must be a positive integer"),
});

export type CreateOrderRequest = z.infer<typeof createOrderRequest>;
