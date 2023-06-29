import { Router } from "express";
// controllers
import getAll from "../controllers/getAll.js";
import getOne from "../controllers/getOne.js";
import addTask from "../controllers/addTask.js";
import updateTask from "../controllers/updateTask.js";
import deleteTask from "../controllers/deleteTask.js";

const router = Router();

// queries
router.get("/getall", getAll);
router.get("/getbyid/:id", getOne);

// mutations
router.post("/add", addTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
