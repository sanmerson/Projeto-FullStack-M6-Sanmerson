import { Router } from "express";
import { createClientController, getClientController, getClientIdController, patchClientIdController, removeClientController} from "../controller/client.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const clientRoutes = Router();

clientRoutes.post("", ensureAuthMiddleware, createClientController);
clientRoutes.get("", ensureAuthMiddleware, getClientController);
clientRoutes.get("/:id", ensureAuthMiddleware, getClientIdController);
clientRoutes.patch("/:id", ensureAuthMiddleware, patchClientIdController);
clientRoutes.delete("/:id", ensureAuthMiddleware, removeClientController);

export default clientRoutes;
