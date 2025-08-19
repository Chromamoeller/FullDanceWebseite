import { Router } from "express";
import { getStudents, addStudent } from "../controllers/studentsController";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);

export default router;
