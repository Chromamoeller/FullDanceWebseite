import { open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";

async function main() {
  const db = await open({
    filename: path.join(__dirname, "dance.sqlite"),
    driver: sqlite3.Database,
  });

  // Teilnehmer-Tabelle
  await db.exec(`
    CREATE TABLE IF NOT EXISTS participants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  // Anwesenheitstabelle
  await db.exec(`
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      participant_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      present BOOLEAN NOT NULL,
      FOREIGN KEY (participant_id) REFERENCES participants(id)
    );
  `);

  // Beispiel: Tanzpaar einfügen
  const { lastID } = await db.run(
    "INSERT INTO participants (name) VALUES (?)",
    "Jenny & Chris"
  );

  // Beispiel: Anwesenheitseintrag für ein Datum
  await db.run(
    "INSERT INTO attendance (participant_id, date, present) VALUES (?, ?, ?)",
    lastID,
    "2025-07-29",
    true
  );

  // Testausgabe
  const result = await db.all(`
    SELECT p.name, a.date, a.present
    FROM attendance a
    JOIN participants p ON p.id = a.participant_id
  `);

  // Tänze
  await db.exec(`
  CREATE TABLE IF NOT EXISTS dances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    style TEXT NOT NULL,
    tempo NUMBER NOT NULL,
    timeSignature TEXT NOT NULL
  );
`);
  await db.run(`
  INSERT INTO dances (name, style, tempo, timeSignature) VALUES
    ('Cha Cha', 'Latein', 30, '4/4'),
    ('Langsamer Walzer', 'Standard', 30, '3/4'),
    ('Jive', 'Latein', 42, '4/4'),
    ('Salsa', 'Latein', 45, '4/4'),
    ('Wiener Waltz', 'Standard', 60, '3/4'),
    ('Tango', 'Standard', 30, '4/4'),
    ('Foxtrot', 'Standard', 50, '4/4'),
    ('Rumba', 'Latein', 35, '4/4'),
    ('Samba', 'Latein', 53, '4/4');
    ('Discofox', 'Standard', 40, '4/4');
`);

  console.log("Anwesenheit:", result);
}

main().catch(console.error);
