import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/erros";
import { IUserDeleteRequest } from "../../interfaces/users";

const deleteUserService = async (payload: IUserDeleteRequest): Promise<{}> => {
  const usersRepository = AppDataSource.getRepository(User);

  if (
    payload.userId !== payload.userToBeDeleted
  ) {
    throw new AppError("Unauthorized!", 401);
  }

  const user = await usersRepository.findOneBy({
    id: payload.userToBeDeleted,
  });

  if (!user) {
    throw new AppError("User does not exists!", 404);
  }

  await usersRepository.remove(user);

  return {};
};
export { deleteUserService };
