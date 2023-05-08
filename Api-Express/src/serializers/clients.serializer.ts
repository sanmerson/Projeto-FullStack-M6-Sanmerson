import * as yup from "yup";

export const clientSerealizer = yup.object().shape({
    id: yup.string(),
    name: yup.string().required(),
    email: yup.string(),
    phone: yup.string(),
    create_at: yup.string(),
}).nullable()


export const clientSerealizerResponse = yup.array(clientSerealizer)