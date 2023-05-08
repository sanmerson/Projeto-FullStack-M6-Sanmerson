import AppDataSource from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { AppError } from "../../errors/erros";

const removeClientService = async (id:string): Promise<any> => {
  const clientRepository = AppDataSource.getRepository(Clients);
  
  const findClient = await clientRepository.findOneBy({ id : id})

  if(!findClient){
    throw new AppError("client does not exists!", 404);
}

  await clientRepository.remove(findClient)

};

export { removeClientService };