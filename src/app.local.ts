import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helloRouter from "./routes/helloRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/hello", helloRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
