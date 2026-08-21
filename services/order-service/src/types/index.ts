export type { CreateOrderRequest } from "../schemas/order.schema";

export type CreateOrderInput = {
  productId: string;
  quantity: number;
  unitPricePaise: number;
  totalPaise: number;
};