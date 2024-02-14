import express from "express";
import diganoseService from "../services/diganoseService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diganoseService.getEntries());
});

router.post("/", (_req, res) => {
  res.send("saving a diagnose");
});

export default router;
