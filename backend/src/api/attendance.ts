import { Router } from "express";
import {
  getAttendance,
  addAttendance,
} from "../controllers/attendanceController";

const router = Router();

router.get("/", getAttendance);
router.post("/", addAttendance);

export default router;
