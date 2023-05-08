import { Clients } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/erros";

const getClientIdService =async (idClient:string): Promise<any> => {
    const clientRepository = AppDataSource.getRepository(Clients);
    const client = await clientRepository.findOne({ where : {id : idClient}, relations:{contacts:true}})
    if(!client){
        throw new AppError("client does not exists!", 404);
    }

    return client;
}

export { getClientIdService };