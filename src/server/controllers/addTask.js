import Task from "../../database/models/Task.js";

const addTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const result = await newTask.save();
    res.status(201);
    res.json({
      message:
        "The request succeeded, and a new resource was created as a result",
      result,
    });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

export default addTask;
