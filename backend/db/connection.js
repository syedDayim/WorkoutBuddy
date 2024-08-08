import mongoose from "mongoose";

const connectDB = (db_url) => {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("Connection succesfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { connectDB };
