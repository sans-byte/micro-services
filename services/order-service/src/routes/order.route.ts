import { Router } from "express";
import { orderController } from "../container";
const orderRouter = Router();

orderRouter.get("/", (req, res) => orderController.getOrders(res));

orderRouter.post("/", (req, res) => orderController.createOrder(req, res));
