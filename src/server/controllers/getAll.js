import Task from "../../database/models/Task.js";

const getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

export default getAll;
