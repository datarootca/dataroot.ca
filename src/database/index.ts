import dotenv from "dotenv";

dotenv.config();
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, //+ "?sslmode=require",
});

export default pool;
