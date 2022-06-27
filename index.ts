import express from "express";
import mongoose from "mongoose";

import config from './src/config/config';

import { AuthRoutes } from "./src/routes/AuthRoutes";

mongoose
  .connect(config.mongo.connection_string, config.mongo.options)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((e) => console.error(e));

const app = express();

app.use("/api/user", AuthRoutes);

app.listen(config.server.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${config.server.port}`);
});
