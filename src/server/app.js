import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "../database/connection.js";
// routes
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// database
connect();

// settings
app.set("PORT", 3000);
app.set("appName", "Rest Api");

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routing
app.use("/api/tasks", tasksRoutes);

app.listen(app.get("PORT"), () => {
  console.log(`The server is listening on the port ${app.get("PORT")}...`);
});
