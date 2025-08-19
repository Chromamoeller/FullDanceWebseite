import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export async function openDb(): Promise<Database> {
  return open({
    filename: "./db/dance_school.sqlite",
    driver: sqlite3.Database,
  });
}
