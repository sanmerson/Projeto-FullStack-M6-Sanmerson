import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createContactController, getContactController, patchContactController, removeContactController } from "../controller/contact.controllers";

const contactsRoutes = Router();

contactsRoutes.post("/:id", createContactController);
contactsRoutes.get("/:id", ensureAuthMiddleware, getContactController);
contactsRoutes.patch("/:id", ensureAuthMiddleware, patchContactController);
contactsRoutes.delete("/:id", ensureAuthMiddleware, removeContactController);


export default contactsRoutes;