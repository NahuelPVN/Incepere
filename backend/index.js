require("dotenv").config();

const express = require("express");
const app = express();

const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// API

app.use(express.static("../frontend"));

app.get("/api/nodes", async (req, res) => {
    const result = await db.query("SELECT * FROM nodes");
    res.json(result.rows);
});

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// REGISTER

function validateRegister(email, password) {
  if (!email || !password) return "All fields are required";
  if (password.length < 8) return "Password must be at least 8 characters long";
  return null;
}

