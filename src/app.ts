// Serverless-Express
// https://github.com/CodeGenieApp/serverless-express/blob/mainline/examples/basic-starter-api-gateway-v2-typescript/src/lambda.ts

import "source-map-support/register";
import express, { Request, Response } from "express";
import serverlessExpress from "@codegenie/serverless-express";
import bodyParser from "body-parser";
import helloRouter from "./routes/helloRouter";

const app = express();
app.use(bodyParser.json());
app.use("/hello", helloRouter);

export const handler = serverlessExpress({ app });