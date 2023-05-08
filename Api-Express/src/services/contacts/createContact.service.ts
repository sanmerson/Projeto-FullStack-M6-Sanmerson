import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IClient, IClientResponse } from "../../interfaces/client";
import { clientSerealizerResponse } from "../../serializers/clients.serializer";


const createContactService =async (data: any, idClient: string): Promise<IClientResponse[]> => {
    const contactRepository = AppDataSource.getRepository(Contacts)
    const newContact = contactRepository.create({...data, clients: idClient})

    await contactRepository.save(newContact);

    return newContact;
}

export default createContactService