import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'yup';
import { AppError } from '../errors/erros';

export const validateDataMiddleware = (schema : AnySchema) =>async (request: Request, response: Response, next: NextFunction) => {
    try {

        const validatedData = await schema.validate(request.body, {
            abortEarly: false,
            stripUnknown: true,  
        })

        request.body = validatedData
        return next()
        
    } catch (error : any) {
        return response.status(400).json({message : error.errors})
    }
}