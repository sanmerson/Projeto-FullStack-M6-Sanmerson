import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import { getContactsService } from "../services/contacts/getContact.service";
import { removeContactService } from "../services/contacts/removeContact.service";
import { patchContactIdService } from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
   const newContact = await createContactService(req.body, req.params.id);
    return res.status(201).json(newContact);
};

export const getContactController = async (req: Request, res: Response) => {
    const newContact = await getContactsService(req.params.id);
    return res.status(201).json(newContact);
};

export const removeContactController = async (req: Request, res: Response) => {
    const newContact = await removeContactService(req.params.id);
    return res.status(201).json(newContact);
};

export const patchContactController = async (req: Request, res: Response) => {
    const newContact = await patchContactIdService(req.body, req.params.id);
    return res.status(201).json(newContact);
};