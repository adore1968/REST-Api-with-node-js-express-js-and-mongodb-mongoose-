import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/tasksDB";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
