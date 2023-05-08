import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";


const getContactsService = async (id:string): Promise<any> => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contacts = await contactRepository.find({
    where : {clients : {id : id}},
    relations: { clients: true },
  })

  return contacts;
};

export { getContactsService };