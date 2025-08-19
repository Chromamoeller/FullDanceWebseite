import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

const app = express();
const PORT = 3000;

// CORS aktivieren → jetzt darf dein Frontend auf die API zugreifen
app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
