import AppDataSource from "../../data-source";
import { AppError } from "../../errors/erros";
import { Contacts } from "../../entities/contacts.entity";

const patchContactIdService =async (data: any,id:string): Promise<any> => {
    const contactRepository = AppDataSource.getRepository(Contacts);
    const contact = contactRepository.findOneBy({id : id})

    if(!contact){
        throw new AppError("client does not exists!", 404);
    }

    await contactRepository.update({id : id},
        {
            ...data,
            ...contact
        }
    )

    const contactReturn = contactRepository.findOneBy({id : id})

    return contactReturn;
}

export { patchContactIdService };