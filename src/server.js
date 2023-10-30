import express from "express";
import router from "./routes";
import connectDatabase from "./config/mongo";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const HOST = process.env.HOST;

const PORT = process.env.PORT;

connectDatabase()
  .then(() => {
    app.use(express.json());

    app.use("/api/v1", router);

    app.listen(PORT, HOST, () => {
      console.log("API RUNNING ON PORT " + PORT);
    });
  })
  .catch((error) => {
    console.log("API FAILED TO START: ", error);
    process.exit();
  });
