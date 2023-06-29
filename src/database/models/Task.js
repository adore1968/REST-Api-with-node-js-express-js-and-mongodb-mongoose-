import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    unique: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Task = model("Tasks", taskSchema);

export default Task;
