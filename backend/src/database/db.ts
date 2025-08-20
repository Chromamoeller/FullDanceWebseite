import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export async function openDb(): Promise<Database> {
  const db = await open({
    filename: "./db/dance_school.sqlite",
    driver: sqlite3.Database,
  });

  // Fremdschlüssel-Prüfung aktivieren
  await db.exec("PRAGMA foreign_keys = ON");

  return db;
}
