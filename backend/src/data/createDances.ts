import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { Dance } from "./dance.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "..", "database", "dance.sqlite");
console.log("Verwende DB-Datei:", dbPath);

const db = await open({
  filename: dbPath,
  driver: sqlite3.Database,
});

const rawDances = await db.all("SELECT * FROM dances");

// in Dance-Objekte umwandeln
const danceObjects: Dance[] = rawDances.map(
  (row) => new Dance(row.id, row.name, row.style, row.tempo, row.timeSignature)
);

console.log(danceObjects); // Jetzt hast du saubere Instanzen
