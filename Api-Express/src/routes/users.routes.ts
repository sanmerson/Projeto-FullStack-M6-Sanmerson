import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from "../controller/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get(
  "",
  ensureAuthMiddleware,
  getUsersController
);
userRouter.delete("/:id", ensureAuthMiddleware, deleteUserController);
userRouter.get("/:id", ensureAuthMiddleware,  getUserByIdController);
userRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  updateUserController
);

export default userRouter;
