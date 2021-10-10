import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Running routes`);
});

export default router;
