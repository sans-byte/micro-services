import { Router } from "express";
import productRoutes from "./product.routes";
const router = Router();

router.get("/health",(req,res)=>{
    res.status(200).json({
        success: true,
        message:"The server is healthy"
    })
})

router.use("/products",productRoutes);

export default router