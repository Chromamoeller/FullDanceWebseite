import { Request, Response } from "express";
import { openDb } from "../database/db";

export async function getStudents(_req: Request, res: Response) {
  const db = await openDb();
  const students = await db.all("SELECT * FROM students");
  res.json(students);
}

export async function addStudent(req: Request, res: Response) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required" });

  const db = await openDb();
  const result = await db.run("INSERT INTO students (name) VALUES (?)", [name]);
  res.status(201).json({ id: result.lastID, name });
}
