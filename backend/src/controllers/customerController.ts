import { Request, Response } from "express";
import { openDb } from "../database/db";

export async function getCustomer(_req: Request, res: Response) {
  const db = await openDb();
  const customer = await db.all("SELECT * FROM customer");
  res.json(customer);
}

export async function addCustomer(req: Request, res: Response) {
  const { name } = req.body;
  const { course_number } = req.body;
  if (!name) return res.status(400).json({ error: "Name required" });
  if (!course_number)
    return res.status(400).json({ error: "Course number required" });
  const db = await openDb();
  const result = await db.run(
    "INSERT INTO customer (name, course_number) VALUES (?, ?)",
    [name, course_number]
  );
  res.status(201).json({ id: result.lastID, name, course_number });
}
