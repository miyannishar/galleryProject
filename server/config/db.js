import mongoose from "mongoose";

const dbConnect = async () => {
  const res = await mongoose.connect(
    "mongodb://127.0.0.1:27017/mern-galley-app"
  );
  if (res) {
    console.log("Connected successfully to DB");
  } else {
    console.log("Falied connection to DB");
  }
};

export default dbConnect;
