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

  // Tabelle customer
  await db.exec(`
    CREATE TABLE IF NOT EXISTS customer (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      course_number TEXT NOT NULL
    )
  `);

  // Tabelle attendance
  await db.exec(`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL,
      present BOOLEAN NOT NULL,
      present_at TEXT NOT NULL,
      FOREIGN KEY (customer_id) REFERENCES customer(id)
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
