import Task from "../../database/models/Task.js";

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Task.findByIdAndDelete(id);
    res.json({ message: "The task was successfully deleted", result });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

export default deleteTask;
