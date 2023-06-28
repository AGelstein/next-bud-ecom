import mongoose from "mongoose";

export function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    if (connection) {
      connection.on("connected", () => {
        console.log("MongoDB Connection Successful!");
      });
    }

    connection.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}
