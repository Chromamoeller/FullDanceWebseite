import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Hilfsfunktion für DB-Verbindung
async function openDb() {
  return open({
    filename: "./db/dance_school.sqlite",
    driver: sqlite3.Database,
  });
}

export async function initDb() {
  const db = await openDb();

  // Tabelle students
  await db.exec(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  // Tabelle attendance
  await db.exec(`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      present INTEGER NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (student_id) REFERENCES students(id)
    )
  `);

  console.log("Database initialized ✅");
}

// Script direkt laufen lassen, wenn Datei ausgeführt wird
if (require.main === module) {
  initDb().catch((err) => {
    console.error("DB init error:", err);
  });
}
