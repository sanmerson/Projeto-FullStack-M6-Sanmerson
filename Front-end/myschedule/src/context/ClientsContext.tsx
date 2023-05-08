import { createContext, useContext, useEffect, useState } from "react";
import { IProvider } from "../interfaces/typeContexts";
import { api } from "../services/api";
import { UserContext } from "./Autorization";

export const ClientsContext = createContext<any>({} as any);

export const ClientProvider = ({ children, setModalAddOpen} : IProvider) => {
    const [clients, setClients] = useState();
    const [editing, setEditing]= useState<Boolean>(false)
    const { setEditModal } = useContext(UserContext)


    useEffect(() =>{
        getClients()
    }, [])
    
    async function getClients() {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.get('clients',
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
            setEditModal(false)
        } catch (error) {
            console.error(error)
        }
    }

    async function addClients(data: any) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            await api.post(`clients`, data,
            {headers: {
                'Authorization': `Bearer ${token}` 
            }})
            setModalAddOpen(false);
            getClients()
        } catch (error) {
            console.error(error)
        }
    }

    async function getClientsId(id: string) {
        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            const {data} = await api.get(`clients/${id}`,
             {headers: {
                'Authorization': `Bearer ${token}` 
              }})
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async function patchClient(data: any, id: string) {

        try {
            const token = window.localStorage.getItem("@MySchedule:token")
            await api.patch(`clients/${id}`, data,
            {headers: {
                'Authorization': `Bearer ${token}` 
            }})
            getClients()
        } catch (error) {
            console.error(error)
        }
    }

    return(<ClientsContext.Provider value={{setClients, clients, removeClients, getClients, addClients, getClientsId, editing, setEditing, patchClient}}>{children}</ClientsContext.Provider>)
}