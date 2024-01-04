import express from "express";
import { my_name } from "./data";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { errorResponse, invalidPath } from "./middleware/ErrorHandler";

//Routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.use("/api/users", userRoutes);

app.use(errorResponse);
app.use(invalidPath);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
