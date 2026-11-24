require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  // host: "localhost",
  // user: "root",
  // password: "vanny7878",
  // database: "sw1_db",

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 2,
});

module.exports = pool;
