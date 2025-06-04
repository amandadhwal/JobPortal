import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";

// Routes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Middlewares
import errormiddleware from "./middlewares/errorMiddleware.js";

// Load environment variables
dotenv.config();

// Connect to DB
connectDB();

// Initialize app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// API routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

// Global error handler
app.use(errormiddleware);

// Start server
const PORT = process.env.PORT || 8040;
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
