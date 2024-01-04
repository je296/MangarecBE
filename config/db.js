import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Blog",
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
