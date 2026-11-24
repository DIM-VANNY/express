const express = require("express");
// const product = require("./product");
const path = require("path");
const mysql = require("mysql2/promise");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const app = express();
app.use(express.json());

app.use("/api/v1", productRoutes);
app.use("/api/auth", authRoutes);

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "vanny7878",
//   database: "sw1_db",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 2,
// });

// async function testDatabase() {
//   try {
//     const connection = await pool.getConnection();

//     console.log("MySQL connected successfully");

//     connection.release();
//   } catch (error) {
//     console.error("MySQL connection failed:", error.message);
//   }
// }

// testDatabase();

// app.get("/", (req, res) => {
//   const filePath = path.join(__dirname, "public", "home.html");
//   res.sendFile(filePath);
// });

// app.get("/api/products", (req, res) => {
//   res.status(200).json(product.product_list);
// });

// app.get("/api/product/:id", (req, res) => {
//   let product_id = req.params.id;
//   let product_list = [];
//   if (product_id !== undefined) {
//     product_list = product.getProductById(product_id);
//   }
//   res.status(200).json(product_list);
// });

// app.post("/api/products", (req, res) => {
//   let product = req.body;
//   res.status(200).json({
//     status: "product has been created successfully",
//     product: product,
//   });
// });

// app.put("/api/product/:id", (req, res) => {
//   let product_id = req.params.id;
//   let product_list = [];
//   if (product_id !== undefined) {
//     product_list = product.getProductById(product_id);
//   }
//   res.status(200).json({
//     status: "product has been updated successfully",
//     product: product_list,
//   });
// });

// app.delete("/api/product/:id", (req, res) => {
//   let product_id = req.params.id;
//   let product_list = [];
//   if (product_id !== undefined) {
//     product_list = product.getProductById(product_id);
//   }
//   res.status(200).json({
//     status: "product has been deleted successfully",
//     product: product_list,
//   });
// });

// app.get("/product{/:id}", async (req, res) => {
//   let product_id = req.params.id;
//   let category = req.query.category;

//   let min_price = req.query.min_price;
//   let max_price = req.query.max_price;

//   let product_list = [];

//   if (product_id !== undefined) {
//     try {
//       const [rows] = await pool.query(`SELECT * FROM product WHERE id = ?`, [
//         product_id,
//       ]);

//       res.status(200).json(rows);
//     } catch (error) {
//       console.error(error);

//       res.status(500).json({
//         message: "Database error",
//       });
//     }
//   }

//   if (min_price !== undefined && max_price !== undefined) {
//     try {
//       const [rows] = await pool.query(
//         `SELECT * FROM product WHERE price BETWEEN ? and ?`,
//         [min_price, max_price],
//       );

//       res.status(200).json(rows);
//     } catch (error) {
//       console.error(error);

//       res.status(500).json({
//         message: "Database error",
//       });
//     }
//   }

//   if (
//     product_id === undefined &&
//     category === undefined &&
//     min_price === undefined &&
//     max_price === undefined
//   ) {
//     try {
//       const [rows] = await pool.query("SELECT * FROM product");

//       res.status(200).json(rows);
//     } catch (error) {
//       console.error(error);

//       res.status(500).json({
//         message: "Database error",
//       });
//     }
//   }

//   res.status(200).json({
//     status: "success",
//     data: product_list,
//   });
// });

// app.post("/create-product", async (req, res) => {
//   let form = req.body;
//   const [result] = await pool.query(
//     "INSERT INTO product (name, cost ,price) VALUES (?, ?, ?)",
//     [form.name, form.cost, form.price],
//   );

//   res.status(201).json({
//     id: result.insertId,
//     name: form.name,
//     cost: form.cost,
//     price: form.price,
//   });
// });

// app.put("/update-product", async (req, res) => {
//   let form = req.body;
//   const [result] = await pool.query(
//     "UPDATE product set `name` = ?, cost = ?, price = ? WHERE id = ?",
//     [form.name, form.cost, form.price, form.id],
//   );

//   res.status(201).json({
//     id: form.id,
//     name: form.name,
//     cost: form.cost,
//     price: form.price,
//   });
// });

// app.delete("/delete-product", async (req, res) => {
//   let form = req.body;

//   const [result] = await pool.query("DELETE FROM product WHERE id = ?", [
//     form.id,
//   ]);

//   console.log(result.affectedRows);

//   res.status(201).json({
//     status: `product has been deleted success Rows: ${result.affectedRows}`,
//   });
// });

app.use((req, res) => {
  const filePath = path.join(__dirname, "public", "404.html");
  res.sendFile(filePath);
});

app.use((err, req, res, next) => {
  const filePath = path.join(__dirname, "public", "500.html");
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
