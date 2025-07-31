import express, { Request, Response } from "express";
import { db } from "./database/danceTable.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from your modern TypeScript + ESModule Express server 🚀");
});

app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});

app.get("/api/dances", async (req: Request, res: Response) => {
  const dances = await db.all("SELECT * FROM dances");
  res.json(dances);
});
