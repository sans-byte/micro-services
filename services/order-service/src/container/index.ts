import OrderController from "../controllers/order.controller";
import OrderRepository from "../repository/order.repository";
import OrderServie from "../services/order.service";
import ProductClient from "../clients/product.client";

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;
if (!PRODUCT_SERVICE_URL) {
  throw new Error("PRODUCT_SERVICE_URL environment variable is not set");
}

export const orderRepository = new OrderRepository();
export const productClient = new ProductClient(PRODUCT_SERVICE_URL);
export const orderService = new OrderServie(orderRepository, productClient);
export const orderController = new OrderController(orderService);
