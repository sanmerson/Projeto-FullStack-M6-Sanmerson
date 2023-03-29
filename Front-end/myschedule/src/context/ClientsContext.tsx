import { createContext, useContext, useEffect, useState } from "react";
import { IProvider } from "../interfaces/typeContexts";
import { api } from "../services/api";

export const ClientsContext = createContext<any>({} as any);

export const ClientProvider = ({ children, setModalAddOpen} : IProvider) => {
    const [clients, setClients] = useState();
    const [selectedClient, setSelectedClient] = useState();

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

    async function removeClients(id : bigint, setModalDelOpen : any) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.delete(`clients/${id}`,
             {headers: {
                'Authorization': `Bearer ${token}` 
              }})
           await getClients()
           setModalDelOpen(false)
        } catch (error) {
            console.error(error)
        }
    }

    async function addClients(data: any) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            await api.post(`clients/`, data,
            {headers: {
                'Authorization': `Bearer ${token}` 
            }})
            await getClients()
            setModalAddOpen(false);
        } catch (error) {
            console.error(error)
        }
    }

    return(<ClientsContext.Provider value={{setClients, clients, removeClients, getClients, addClients, setSelectedClient, selectedClient}}>{children}</ClientsContext.Provider>)
}