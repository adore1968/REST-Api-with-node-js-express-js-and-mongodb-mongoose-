import Task from "../../database/models/Task.js";

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const newTask = req.body;
    const result = await Task.findByIdAndUpdate(id, newTask);
    res.json({ message: "The task was succesfully updated", oldTask: result });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

export default updateTask;
