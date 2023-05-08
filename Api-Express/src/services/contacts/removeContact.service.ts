import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/erros";

const removeContactService = async (id:string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  
  const findContact = await contactRepository.findOneBy({ id : id})

  if(!findContact){
    throw new AppError("contact does not exists!", 404);
}


  await contactRepository.remove(findContact)

};

export { removeContactService };