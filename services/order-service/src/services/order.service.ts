import type OrderRepository from "../repository/order.repository";
import type ProductClient from "../clients/product.client";
import type { CreateOrderInput, CreateOrderRequest } from "../types";
import { InsufficientStockError, NotFoundError } from "../errors/domain-errors";

export default class OrderServie {
  constructor(
    private orderRepository: OrderRepository,
    private productClient: ProductClient,
  ) {}

  async getOrders() {
    return this.orderRepository.getOrder();
  }

  async createOrder(order: CreateOrderRequest) {
    const product = await this.productClient.getProductById(order.productId);
    if (!product) {
      throw new NotFoundError(`Product ${order.productId} not found`);
    }
    if (product.stock < order.quantity) {
      throw new InsufficientStockError(
        `Only ${product.stock} unit(s) of product ${order.productId} available, requested ${order.quantity}`
      );
    }

    const unitPricePaise = product.pricePaise;
    const createOrder: CreateOrderInput = {
      productId: order.productId,
      quantity: order.quantity,
      unitPricePaise,
      totalPaise: unitPricePaise * order.quantity,
    };
    return this.orderRepository.createOrder(createOrder);
  }
}
