import { open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "attendance.sqlite");

export const db = await open({ filename: dbPath, driver: sqlite3.Database });

await db.exec(`
    CREATE TABLE IF NOT EXISTS couple (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    );
`);

await db.exec(`
    CREATE TABLE IF NOT EXISTS attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        couple_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        FOREIGN KEY (couple_id) REFERENCES couple(id) ON DELETE CASCADE,
        CONSTRAINT unique_couple_date UNIQUE (couple_id, date),
        CONSTRAINT valid_date CHECK (date("date") IS NOT NULL)
    );
`);
// Neues Paar hinzufügen
await db.run(`INSERT INTO couple (name) VALUES (?)`, ["Familie Pineda"]);

// Mehrere auf einmal (optional Loop)
const couples = [
  "Ralf & Kathrin Schmitz",
  "Stefan & Kathrin Novack",
  "Harald & Sabine Goldmann",
  "Phillip & Tina LeDrenn",
];
for (const name of couples) {
  await db.run(`INSERT INTO couple (name) VALUES (?)`, [name]);
}
// Beispiel: Familie Pineda war am 2025-01-12 da
const couple = await db.get(`SELECT id FROM couple WHERE name = ?`, [
  "Familie Pineda",
]);

if (couple) {
  await db.run(
    `INSERT OR IGNORE INTO attendance (couple_id, date) VALUES (?, ?)`,
    [couple.id, "2025-01-12"] // ISO-Format YYYY-MM-DD
  );
}
