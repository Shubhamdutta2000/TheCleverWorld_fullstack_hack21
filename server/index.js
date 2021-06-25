import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";


dotenv.config();

process.env.NODE_ENV === "test" ? connectLocalDB() : connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(5000, () => {
    console.info(`app running on ${environment} mode at port ${PORT} `);
  });