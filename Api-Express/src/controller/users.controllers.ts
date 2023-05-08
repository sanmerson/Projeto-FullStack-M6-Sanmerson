import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { getUserByIdService } from "../services/user/getUserById.service";
import { getUsersService } from "../services/user/getUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

const deleteUserController = async (req: Request, res: Response) => {
  const payload = {
    userId: req.user.id,
    userToBeDeleted: req.params.id,
  };

  const deleted = await deleteUserService(payload);

  return res.status(200).json(deleted);
};

const getUserByIdController = async (req: Request, res: Response) => {
  const user = await getUserByIdService(req.params.id);
  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
};

export {
  createUserController,
  getUsersController,
  deleteUserController,
  getUserByIdController,
  updateUserController,
};
