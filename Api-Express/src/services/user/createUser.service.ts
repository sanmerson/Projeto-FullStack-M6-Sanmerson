import e from "express";
import { ObjectShape } from "yup/lib/object";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/erros";
import { IUserRequest } from "../../interfaces/users";
import {
  createUserSerializer,
  returnUserSerializer,
} from "../../serializers/users.serializer";

const createUserService = async (data: IUserRequest): Promise<ObjectShape> => {
  const userDatabase = AppDataSource.getRepository(User);

  const findUser = await userDatabase.findOneBy({
    email: data.email,
  });

  if (findUser) {
    throw new AppError("User already exists!", 409);
  }

  try {
    await createUserSerializer.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });
  } catch (error) {
    throw new AppError(error.errors, 401);
  }


  const newUser = userDatabase.create(data);
  await userDatabase.save(newUser);

  const returnUser = await returnUserSerializer.validate(newUser, {
    stripUnknown: true,
  });

  return returnUser;
};

export { createUserService };
