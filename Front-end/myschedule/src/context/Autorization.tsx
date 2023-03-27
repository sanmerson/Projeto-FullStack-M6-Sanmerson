import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from '../services/api'

interface IUserContextProps{
    email : string;
    password : string; 
}


export const UserContext = createContext<any>({} as any);

export const UserProvider = ({ children } : any) => {

    const [userData, setUserData] = useState<any>();
    const [load, setLoad] = useState<boolean>(true);
    const navigator = useNavigate();

    async function LoginUser(data : IUserContextProps) {
        try {
            
            const resposta = await api.post('users/login/', data)
            const {refresh, access} = resposta.data;

            localStorage.setItem('@MySchedule:token', access)
            localStorage.setItem('@MySchedule:refresh', refresh)

        } catch (error) {
           console.error(error)
        }
       }

    return(
        <UserContext.Provider value={{LoginUser, load}}>{children}</UserContext.Provider>
    );
}