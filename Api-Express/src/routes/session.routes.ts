import { Router } from "express";
import { createSessionController } from "../controller/session.controllers";

const clientRoutes = Router();

clientRoutes.post("", createSessionController);

export default clientRoutes;
