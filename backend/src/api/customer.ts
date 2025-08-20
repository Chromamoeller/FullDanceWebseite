import { Router } from "express";
import { getCustomer, addCustomer } from "../controllers/customerController";

const router = Router();

router.get("/", getCustomer);
router.post("/", addCustomer);

export default router;
