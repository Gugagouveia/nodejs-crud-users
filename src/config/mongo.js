import mongoose from "mongoose";

const connectDatabase = async () => {
  const connString = process.env.MONGO_CONNECTION_STRING;

  if (!connString) {
    throw new Error("Failed to get database connection string");
  }
  console.log("Connecting to MongoDB...");

  try {
    await mongoose.connect(connString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ignoreUndefined: true,
    });
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error:"));
    db.on("open", () => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log("error connecting to MongoDB: ", error);
    throw error;
  }
};

export default connectDatabase;
