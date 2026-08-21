import type { Request, Response } from "express";
import type OrderServie from "../services/order.service";
import { createOrderRequest } from "../schemas/order.schema";
import { InsufficientStockError, NotFoundError, ProductServiceError, ProductServiceTimeoutError } from "../errors/domain-errors";

export default class OrderController {
  constructor(private orderService: OrderServie) {}

  async getOrders(req: Request, res: Response) {
    try {
      const orders = await this.orderService.getOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch orders",
      });
    }
  }

  async createOrder(req: Request, res: Response) {
    const parsed = createOrderRequest.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: parsed.error.issues.map((issue) => issue.message),
      });
      return;
    }

    try {
      const createdOrder = await this.orderService.createOrder(parsed.data);
      res.status(201).json(createdOrder);
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(404).json({ success: false, error: error.message });
        return;
      }
      if (error instanceof InsufficientStockError) {
        res.status(409).json({ success: false, error: error.message });
        return;
      }
      if (error instanceof ProductServiceTimeoutError) {
        res.status(504).json({ success: false, error: error.message });
        return;
      }
      if (error instanceof ProductServiceError) {
        res.status(502).json({ success: false, error: error.message });
        return;
      }
      res.status(500).json({
        success: false,
        error: "Failed to create order",
      });
    }
  }
}
