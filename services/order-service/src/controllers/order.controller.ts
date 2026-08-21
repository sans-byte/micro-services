import type { Request, Response } from "express";
import type OrderServie from "../services/order.service";
import { createOrderSchema } from "../schemas/order.schema";
export default class OrderController {
  constructor(private orderService: OrderServie) {}

  async getOrders(res: Response) {
    const getOrder = this.orderService.getOrders();
    res.status(200).send(getOrder);
  }

  async createOrder(req: Request, res: Response) {
    const parsed = createOrderSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: parsed.error.issues.map((issue) => issue.message),
      });
      return;
    }
    const createdOrder = this.orderService.createOrder(parsed.data);
    res.status(200).send(createdOrder);
  }
}
