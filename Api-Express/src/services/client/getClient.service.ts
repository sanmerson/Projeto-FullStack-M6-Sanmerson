import AppDataSource from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { clientSerealizerResponse } from "../../serializers/clients.serializer";


const getClientService = async (id:string): Promise<any[]> => {
  const clientRepository = AppDataSource.getRepository(Clients);

  const clients = await clientRepository.find({
    where : {user : {id : id}},
    relations: { user: true },
  })

  return clients;
};

export { getClientService };