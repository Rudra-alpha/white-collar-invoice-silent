import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import invoiceRoutes from "./routes/invoiceRoutes.js";

dotenv.config();
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));

app.get("/", (req, res) => {
    res.send("hello world from the backend");
});

// Routes
app.use("/api", invoiceRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
