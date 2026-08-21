import prisma from ".";
import type { Prisma } from "../generated/prisma/client";

export default class OrderRepository {
  constructor() {}

  async getOrder() {
    return prisma.order.findMany();
  }

  async getOrderById(id: string) {
    return prisma.order.findUnique({ where: { id } });
  }

  async createOrder(order: Prisma.OrderCreateInput) {
    return prisma.order.create({ data: order });
  }
}
