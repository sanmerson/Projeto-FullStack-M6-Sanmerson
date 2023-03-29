import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { AddClientModal, DelClientModal } from "../../components/Modais"
import { NavBar } from "../../components/NavBar"
import { UserContext } from "../../context/Autorization"
import { ClientProvider, ClientsContext } from "../../context/ClientsContext"
import { StyledContainerClients } from "../../styles/article"
import { StyledContainerAddClient, StyledContainerMain } from "../../styles/containers"
import { StyledAddButton, StyledButtonNav } from "../../styles/styledButton"
import { StyledTitleH1, StyledTitleH3 } from "../../styles/typography"

export const Dashboard = () => {
    const {load} = useContext(UserContext)
    const {clients, removeClients, getClients, setSelectedClient, selectedClient } = useContext(ClientsContext)
    const [ModalAddOpen, setModalAddOpen] = useState<any>(false)
    const [ModalDelOpen, setModalDelOpen] = useState<any>(false)
    const navigate = useNavigate();
    
    function ClearStorage(){
        localStorage.removeItem('@MySchedule:token')
        localStorage.removeItem('@MySchedule:refresh')
        navigate('/', {replace: true})
    }

    useEffect(() =>{
        getClients()
    }, [ModalAddOpen, ModalDelOpen])

    function confirmDelection(id : any){
        setSelectedClient(id)
        setModalDelOpen(true)
    }
    
    function openClientDetail(id : any) : any{
            console.log(`modalOpen${id}`)
    }

    return(
        <>
            <NavBar>
                <>
                <StyledButtonNav onClick={ClearStorage}>sair</StyledButtonNav>
                </>
            </NavBar>
            <StyledContainerMain marginMin='5% auto' marginMax='3% auto'>
                {ModalAddOpen && (
                    <ClientProvider setModalAddOpen={setModalAddOpen}>
                        <AddClientModal setModalAddOpen={setModalAddOpen}/>
                    </ClientProvider>
                )}
                {ModalDelOpen && (
                    <ClientProvider setModalDelOpen={setModalDelOpen} selectedClient={selectedClient}>
                        <DelClientModal setModalDelOpen={setModalDelOpen} selectedClient={selectedClient}/>
                    </ClientProvider>
                )}
                <StyledContainerAddClient>
                    <StyledTitleH1>Seus Clientes</StyledTitleH1>
                    <StyledAddButton color='--black' onClick={()=>{setModalAddOpen(true)}}>+</StyledAddButton>
                </StyledContainerAddClient>
                <StyledContainerClients>
                    {clients?.length === 0?
                        <>
                            <StyledTitleH3 >Adicione alguns clientes</StyledTitleH3>
                        </>
                    :
                    <>
                    <StyledTitleH3 margim='10px 0px 0px 0px;'>Clique em um cliente para ver detalhes</StyledTitleH3>
                        <ul className="Clients">
                            {clients?.map((client : any)=>{
                                return(
                                    <li id={client.id} key={client.id}>
                                        <button onClick={()=>{confirmDelection(client.id)}}>X</button>
                                        <p>{client.name}</p>
                                        <p>{client.phone}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    }
                </StyledContainerClients>
            </StyledContainerMain>
        </>
    )
}