import express from "express";
import dbConnect from "./config/db.js";
import cors from "cors";
import galleryRoutes from "./routes/gallery.js"

const app = express();
const PORT = 8000;


// API routes
app.use(cors());
app.use(express.json())
app.use("/api/v1", galleryRoutes)


dbConnect();

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT);
