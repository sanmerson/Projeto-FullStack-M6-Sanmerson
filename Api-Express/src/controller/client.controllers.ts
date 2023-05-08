import { Request, Response } from "express";
import createClientService from "../services/client/createClient.service";
import { getClientService } from "../services/client/getClient.service";
import { removeClientService } from "../services/client/removeClient.service";
import { getClientIdService } from "../services/client/getClientId.service";
import { patchClientIdService } from "../services/client/updateClient.service";

export const createClientController = async (req: Request, res: Response) => {
    const newClient = await createClientService(req.body, req.user.id);
    return res.status(201).json(newClient);
  };

export const getClientController = async (req: Request, res: Response) => {
    const allClient = await getClientService(req.user.id);
    return res.status(200).json(allClient);
  };

  export const removeClientController = async (req: Request, res: Response) => {
    await removeClientService(req.params.id);
    return res.status(200).json();
  };

  export const getClientIdController = async (req: Request, res: Response) => {
    const client = await getClientIdService(req.params.id);
    return res.status(200).json(client);
  };

  export const patchClientIdController = async (req: Request, res: Response) => {
    const client = await patchClientIdService(req.body, req.params.id);
    return res.status(200).json(client);
  };