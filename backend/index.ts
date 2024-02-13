import express from "express";
import cors from "cors";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  const time = new Date().toLocaleString("fi-FI");
  res.send(`pong at around${time}`);
});

app.get("/api", (_req, res) => {
  console.log("build api here");
  res.send('this is /api<br>api stands for "application programming interface"');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
