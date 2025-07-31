import { open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "dance.sqlite");

export const db = await open({ filename: dbPath, driver: sqlite3.Database });

await db.exec(`
  CREATE TABLE IF NOT EXISTS dances (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    style TEXT NOT NULL,
    tempo TEXT NOT NULL,
    timeSignature TEXT NOT NULL
  );
`);
await db.exec(`
  CREATE TABLE IF NOT EXISTS figures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    dance_id INTEGER NOT NULL,                 
    difficulty TEXT,
    timing TEXT,
    direction TEXT,
    neededFoot TEXT,
    freeFootAferFinish TEXT,
    startDancePosition TEXT,
    endDancePosition TEXT,
    stepCount INTEGER,
    aligment TEXT,
    footwork TEXT,                            
    FOREIGN KEY (dance_id) REFERENCES dances(id)
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
    ('Samba', 'Latein', 53, '4/4'),
    ('Discofox', 'Standard', 40, '4/4');
`);
await db.exec(`
  INSERT INTO figures (
    name, dance_id, difficulty, timing, direction,
    neededFoot, freeFootAferFinish, startDancePosition,
    endDancePosition, stepCount, aligment, footwork
  ) VALUES
    ('1-3 Grundschritt', 1, 'leicht', '2,3,4&1', 'vorwärts', 'links', 'rechts', 'geschlossene Haltung', 'geschlossene Haltung', 5, 'Vernachlässigbar', 'Ballflach Ballflach Ballen Ballen Ballflach'),
    ('4-6 Grundschritt', 1, 'leicht', '2,3,4&1', 'rückwärts', 'rechts', 'links', 'geschlossene Haltung', 'geschlossene Haltung', 5, 'Vernachlässigbar', 'Ballflach Ballflach Ballen Ballen Ballflach'),
    ('Damensolo', 1, 'leicht', '2,3,4&1', 'rückwärts', 'rechts', 'links', 'geschlossene Haltung', 'geschlossene Haltung', 5, 'Vernachlässigbar', 'Ballflach Ballflach Ballen Ballen Ballflach'),
    ('Promenade', 1, 'leicht', '2,3,4&1', 'vorwärts', 'links', 'rechts', 'offene Haltung', 'offene Haltung', 5, 'Vernachlässigbar', 'Ballflach Ballflach Ballen Ballen Ballflach'),
    ('Hand To Hand', 1, 'leicht', '2,3,4&1', 'rückwärts', 'rechts', 'links', 'offene Haltung', 'offene Haltung', 5, 'Vernachlässigbar', 'Ballflach Ballflach Ballen Ballen Ballflach');
`);

// await db.run(
//   `
//   INSERT INTO figures (
//     name, dance_id, difficulty, timing, direction,
//     neededFoot, freeFootAferFinish, startDancePosition,
//     endDancePosition, stepCount, aligment, footwork
//   )
//   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// `,
//   [
//     "1-3 Grundschritt",
//     1,
//     "leicht",
//     "2,3,4&1",
//     "vorwärts",
//     "links",
//     "rechts",
//     "geschlossene Haltung",
//     "geschlossene Haltung",
//     5,
//     "Vernachlässigbar",
//     "Ballflach Ballflach Ballen Ballen Ballflach",
//   ],
//   [
//     "4-6 Grundschritt",
//     1,
//     "leicht",
//     "2,3,4&1",
//     "rückwärts",
//     "rechts",
//     "links",
//     "geschlossene Haltung",
//     "geschlossene Haltung",
//     5,
//     "Vernachlässigbar",
//     "Ballflach Ballflach Ballen Ballen Ballflach",
//   ],
//   [
//     "Damensolo",
//     1,
//     "leicht",
//     "2,3,4&1",
//     "rückwärts",
//     "rechts",
//     "links",
//     "geschlossene Haltung",
//     "geschlossene Haltung",
//     5,
//     "Vernachlässigbar",
//     "Ballflach Ballflach Ballen Ballen Ballflach",
//   ],
//   [
//     "Promenade",
//     1,
//     "leicht",
//     "2,3,4&1",
//     "vorwärts",
//     "links",
//     "rechts",
//     "geschlossene Haltung",
//     "geschlossene Haltung",
//     5,
//     "Vernachlässigbar",
//     "Ballflach Ballflach Ballen Ballen Ballflach",
//   ]
// );
