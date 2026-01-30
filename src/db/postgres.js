// src/db/postgres.js
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function insertEvent(event) {
  await pool.query(
    "INSERT INTO events (id, payload) VALUES ($1, $2)",
    [event.id, event]
  );
}