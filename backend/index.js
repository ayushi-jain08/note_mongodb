import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
dotenv.config();
import cors from "cors";
import task from "./Routes/Task.js";
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/task", task);

const PORT = process.env.PORT || 7000;

app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
});
