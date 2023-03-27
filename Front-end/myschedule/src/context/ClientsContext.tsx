import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const ClientsContext = createContext<any>({} as any);

export const ClientProvider = ({ children } : any) => {
    const [clients, setClients] = useState();

    useEffect(() =>{
        getClients()
    }, [])
    
    async function getClients() {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.get('clients/',
             {headers: {
                'Authorization': `Bearer ${token}` 
              }})
            setClients(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function removeClients(id : any) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.delete(`clients/${id}`,
             {headers: {
                'Authorization': `Bearer ${token}` 
              }})
            getClients()
        } catch (error) {
            console.error(error)
        }
    }

    return(<ClientsContext.Provider value={{setClients, clients, removeClients, getClients}}>{children}</ClientsContext.Provider>)
}