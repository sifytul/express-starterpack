import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import connectDB from "./src/config/dbConnection.js";
import allRoutes from "./src/routes/allRoutes.js";

const app = express();

// middleware in use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(helmet())

// dbConnection
connectDB();
// route is use
app.use("/api/v1", allRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({message: "Everything is allright"});
});


mongoose.connection.once("open", () => {
  console.log("DB connected");
  app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is listening on PORT:${process.env.PORT || 7000}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

export default app;
