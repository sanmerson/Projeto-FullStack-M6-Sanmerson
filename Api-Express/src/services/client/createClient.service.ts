import { promises } from "dns";
import AppDataSource from "../../data-source";
import { Clients } from "../../entities/clients.entity";
import { IClient, IClientResponse } from "../../interfaces/client";
import { clientSerealizer, clientSerealizerResponse } from "../../serializers/clients.serializer";


const createClientService =async (data: any, idUser: string): Promise<any> => {
    const clients = AppDataSource.getRepository(Clients)

    const newClient = clients.create({...data, user: idUser})

    await clients.save(newClient);

    const ResponseClient = await clientSerealizer.validate(newClient, {
        stripUnknown:true
    })

    return ResponseClient;
}

export default createClientService