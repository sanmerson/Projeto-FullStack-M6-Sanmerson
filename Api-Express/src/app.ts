import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRouter from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import { errorHandle } from "./errors/erros";
import clientRoutes from "./routes/client.routes";
import contactsRoutes from "./routes/contacts.routes";



const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use("/users", userRouter);
app.use("/login", sessionRoutes);
app.use("/clients", clientRoutes);
app.use("/contacts", contactsRoutes)
app.use(errorHandle);


export default app;
