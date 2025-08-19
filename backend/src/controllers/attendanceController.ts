import { Request, Response } from "express";
import { openDb } from "../database/db";

export async function getAttendance(_req: Request, res: Response) {
  const db = await openDb();
  const entries = await db.all(`
    SELECT attendance.id, students.name, attendance.present, attendance.created_at
    FROM attendance
    JOIN students ON attendance.student_id = students.id
    ORDER BY attendance.created_at DESC
  `);
  res.json(entries);
}

export async function addAttendance(req: Request, res: Response) {
  const { student_id, present } = req.body;
  if (!student_id || present === undefined) {
    return res.status(400).json({ error: "student_id and present required" });
  }

  const db = await openDb();
  const result = await db.run(
    "INSERT INTO attendance (student_id, present) VALUES (?, ?)",
    [student_id, present ? 1 : 0]
  );

  res.status(201).json({ id: result.lastID, student_id, present });
}
