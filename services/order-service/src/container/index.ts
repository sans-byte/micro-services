import OrderController from "../controllers/order.controller";
import OrderRepository from "../repository/order.repository";
import OrderServie from "../services/order.service";

export const orderRepository = new OrderRepository();
export const orderService = new OrderServie(orderRepository);
export const orderController = new OrderController(orderService);