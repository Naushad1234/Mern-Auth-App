import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"; // ensure the file extension is included
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for real");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500; //Internal Server Error
  const message = err.message || "internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
