import { Request, Response } from "express";
import { openDb } from "../database/db";

export async function getAttendance(_req: Request, res: Response) {
  const db = await openDb();
  const entries = await db.all(`
    SELECT attendance.id, customer.name, attendance.present, attendance.present_at
    FROM attendance
    JOIN customer ON attendance.customer_id = customer.id
    ORDER BY attendance.present_at DESC
  `);
  res.json(entries);
}

export async function addAttendance(req: Request, res: Response) {
  const { customer_id, present } = req.body;
  if (!customer_id || present === undefined) {
    return res.status(400).json({ error: "customer_id and present required" });
  }

  const db = await openDb();
  const result = await db.run(
    "INSERT INTO attendance (customer_id, present, present_at) VALUES (?, ?, ?)",
    [customer_id, present ? true : false, new Date().toISOString()]
  );

  res.status(201).json({ id: result.lastID, customer_id, present });
}
