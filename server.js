// import express from "express";
// import colors from "colors"
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";

// // Configure .env
// dotenv.config();

// // database config;
// connectDB();

// // rest object
// const app= express();

// // middle wares
// app.use(express.json())
// app.use(morgan("dev"));

// app.get("/",(req,res)=>{
//   res.send("<h1>welcome to Trendy Trend server</h1>")
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT,()=>{
//   console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
// })

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors'

// Configure .env
dotenv.config();

// Database config
connectDB();

// Express app
const app = express();

// Middleware
app.use(cors());  
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth",authRoutes);

// Middleware to log request headers
// app.use((req, res, next) => {
//   console.log("Request Headers:", req.headers);
//   next();
// });

// Routes
app.get("/", (req, res) => {
  // Disable caching
  res.setHeader('Cache-Control', 'no-store');
  // res.setHeader('Pragma', 'no-cache');
  // res.setHeader('Expires', '0');
  res.send("<h1>Welcome to Trendy Trend server</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
