import { Router } from "express";
import customerRouter from "../api/customer";
import attendanceRouter from "../api/attendance";

const router = Router();

router.use("/customer", customerRouter);
router.use("/attendance", attendanceRouter);

export default router;
