import { Clients } from "../../entities/clients.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/erros";

const patchClientIdService =async (data: any,id:string): Promise<any> => {
    const clientRepository = AppDataSource.getRepository(Clients);
    const client = clientRepository.findOneBy({id : id})

    if(!client){
        throw new AppError("client does not exists!", 404);
    }

    await clientRepository.update({id : id},
        {
            ...data,
            ...client
        }
    )

    const clientReturn = clientRepository.findOneBy({id : id})

    return clientReturn;
}

export { patchClientIdService };