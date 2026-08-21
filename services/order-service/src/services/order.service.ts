import type { Request, Response } from "express";
import type OrderRepository from "../repository/order.repository";
import type { CreateOrderInput } from "../types";

export default class OrderServie {
  constructor(private orderRepository: OrderRepository) {}

  async getOrders() {
    return this.orderRepository.getOrder();
  }

  async createOrder(order: CreateOrderInput) {
    return this.orderRepository.createOrder(order);
  }
}
