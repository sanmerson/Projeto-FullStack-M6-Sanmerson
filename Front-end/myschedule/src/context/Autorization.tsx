import { createContext, useState } from "react";
//import { useNavigate } from "react-router";
import { api } from '../services/api'

interface IUserContextProps{
    email : string;
    password : string; 
}


export const UserContext = createContext<any>({} as any);

export const UserProvider = ({ children } : any) => {

    const [load, setLoad] = useState<boolean>(true);
    //const navigator = useNavigate();

    async function LoginUser(data : IUserContextProps) {
        try {
            
            const resp = await api.post('users/login/', data)
            const {refresh, access} = resp.data;

            localStorage.setItem('@MySchedule:token', access)
            localStorage.setItem('@MySchedule:refresh', refresh)

        } catch (error) {
           console.error(error)
        }
       }
    
    async function RegisterUser(data:any) {
        try {
            const resp = await api.post('users/', data)
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <UserContext.Provider value={{LoginUser, RegisterUser, setLoad, load}}>{children}</UserContext.Provider>
    );
}