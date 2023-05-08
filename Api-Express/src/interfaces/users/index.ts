interface IUserRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
  telephone: string;
  type: string;
}

interface IUserResponse {
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  type: any;
}

interface IUserDeleteRequest {
  userId: string;
  userToBeDeleted: string;
}

interface IUserUpdate {
  name?: string;
  cpf?: string;
  email?: string;
  telephone?: string;
  password?: string;
}

interface IUserUpdateResponse {
  name?: string;
  cpf?: string;
  email?: string;
  telephone?: string;
}

export {
  IUserRequest,
  IUserResponse,
  IUserDeleteRequest,
  IUserUpdate,
  IUserUpdateResponse,
};
