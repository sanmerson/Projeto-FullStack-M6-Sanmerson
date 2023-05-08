import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/erros";
import { IUserLogin } from "../../interfaces/login/index";
import jwt from "jsonwebtoken";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }

  const passwordVerify = await compare(password, user.password);
     if (!passwordVerify) {
       throw new AppError("Email or password invalid", 403);
     }

  const token = jwt.sign(
    {},
    process.env.SECRET_KEY!,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;
