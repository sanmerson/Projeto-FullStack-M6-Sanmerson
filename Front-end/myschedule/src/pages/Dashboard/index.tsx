import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../components/NavBar"
import { UserContext } from "../../context/Autorization"
import { ClientsContext } from "../../context/ClientsContext"

export const Dashboard = () => {
    const {load} = useContext(UserContext)
    const {clients, removeClients, getClients} = useContext(ClientsContext)
    const navigate = useNavigate();
    
    function ClearStorage(){
        localStorage.removeItem('@MySchedule:token')
        localStorage.removeItem('@MySchedule:refresh')
        navigate('/', {replace: true})
    }

    function openClientDetail(id : any) : any{
            console.log(`modalOpen${id}`)
    }

    function openAddClient(id : any) : any{
        console.log(`adicionar Cliente`)
    }

    return(
        <>
        <NavBar><><button onClick={ClearStorage}>sair</button></></NavBar>
        <div>
            <p>Seus Clientes</p>
            <button onClick={openAddClient}>Adicionar</button>
        </div>
        <div>
            {clients?.length === 0?
                <>
                <p>Adicione alguns contatos</p>
                </>
            :
            <ul>
                {clients?.map((client : any)=>{
                    return(
                        <li id={client.id} key={client.id} onClick={()=>{openClientDetail(client.id)}}>
                            <button onClick={()=>{removeClients(client.id)}}>remover</button>
                            <p>{client.name}</p>
                            <p>{client.phone}</p>
                        </li>
                    )
                })}
            </ul>
            }
        </div>
        </>
    )
}