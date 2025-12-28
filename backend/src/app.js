import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/analyze", analyzeRoutes);


app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});


app.use(errorHandler);

export default app;
