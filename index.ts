import express from "express";

import { AuthRoutes } from "./src/routes/AuthRoutes";
import { dbConnection } from "./src/db/db";


const app = express();
const port = process.env.PORT;

dbConnection();

app.use("/api/user", AuthRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
