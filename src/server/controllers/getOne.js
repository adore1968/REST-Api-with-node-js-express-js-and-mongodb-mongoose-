import Task from "../../database/models/Task.js";

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.json(task);
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
};

export default getOne;
