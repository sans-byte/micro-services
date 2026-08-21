import { Router } from "express";
import orderRouter from "./order.route";

const router = Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "The server is healthy",
    });
});

router.use("/orders", orderRouter);

export default router;
