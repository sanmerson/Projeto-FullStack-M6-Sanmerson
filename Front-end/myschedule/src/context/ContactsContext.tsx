import { createContext } from "react";
import { api } from "../services/api"
import { IProvider } from "../interfaces/typeContexts";

export const ContactsContext = createContext<any>({} as any);

export const ContactsProvider = ({ children} : IProvider) => {
    
    async function postContact(newContact: any, id : string) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.post(`contacts/${id}`, newContact,
             {headers: {
                'Authorization': `Bearer ${token}` 
              }})
    
        } catch (error) {
            console.error(error)
        }
    }

    return(<ContactsContext.Provider value={{postContact}}>{children}</ContactsContext.Provider>)
}

