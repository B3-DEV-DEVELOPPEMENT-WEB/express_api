import express from "express";
import {router as usersRoutes} from "./routes/users.routes.js"

const app = express();
const port = 3000;

app.use("/users", usersRoutes);

app.listen(port, () => {
    console.log(`App started, listening to port ${port}`);
});