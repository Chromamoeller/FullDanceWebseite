import { Router } from "express";
import studentsRouter from "../api/students";
import attendanceRouter from "../api/attendance";

const router = Router();

router.use("/students", studentsRouter);
router.use("/attendance", attendanceRouter);

export default router;
