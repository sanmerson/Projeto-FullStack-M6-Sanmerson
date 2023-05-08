import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../services/api'

interface IUserContextProps{
    email : string;
    password : string; 
}

export const UserContext = createContext<any>({} as any);

export const UserProvider = ({ children } : any) => {

    const [load, setLoad] = useState<boolean>(true);
    const [editModal, setEditModal] = useState<boolean>(false)
    const [editClient, setEditClient] = useState()
    const navigate = useNavigate();

    async function LoginUser(data : IUserContextProps) {
        try {
            
            const resp = await api.post('login', data)
            const {token} = resp.data;

            localStorage.setItem('@MySchedule:token', token)
            api.defaults.headers.authorization = `Bearer ${token}`
            navigate('/dashboard', {replace: true})
        } catch (error) {
           console.error(error)
        }
       }
    
    async function RegisterUser(data:any) {
        try {
            const resp = await api.post('users', data)
            navigate('/login', {replace: true})
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <UserContext.Provider value={{LoginUser, RegisterUser, setLoad, load, editModal, setEditModal, editClient, setEditClient}}>{children}</UserContext.Provider>
    );
}