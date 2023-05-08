import { useContext, useEffect, useState } from "react"
import { IProvider } from "../../interfaces/typeContexts"
import { UserContext } from "../../context/Autorization"
import { ClientsContext } from "../../context/ClientsContext"
import { StyleEditClientModal } from "../../styles/modal"
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsContext } from "../../context/ContactsContext"
import { HeadlineBig, HeadlineBold, StyledTitleH2, StyledTitleH3 } from "../../styles/typography"
import { StyleContactAddForms, StyleDetailForms } from "../../styles/forms"
import { StyledButton } from "../../styles/styledButton"
import { StyledContainerContacts } from "../../styles/containers"

export const EditClientModal = ({ children} : IProvider) => {
    const [clientDetail, setclientDetail] = useState<any>()
    const {editClient, setEditModal, editModal} = useContext(UserContext)
    const { getClientsId, editing, setEditing, patchClient, removeClients } = useContext(ClientsContext)
    const { postContact } = useContext(ContactsContext)
    
    useEffect(()=>{
        getDatailContact()
    },[editClient])

    async function getDatailContact(){
        const client = await getClientsId(editClient)
        setclientDetail(client)
    }

    const schema = yup.object().shape({
        name: yup.string(),
        phone : yup.string(),
        email : yup.string(),
        description : yup.string(),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    async function patchesClient(data: any){
        await patchClient(data, clientDetail?.id)
        getDatailContact()
    }

    async function addingContact(data: any){
        await postContact(data, clientDetail?.id)
        getDatailContact()
    }

    return (
        <>
            <StyleEditClientModal>
                <div className="Background">
                    <div className="Content">
                        <div className="Navegation">
                            <StyledTitleH3>Detalhes</StyledTitleH3>
                            <button onClick={()=>{setEditModal(!editModal); setEditing(false)}}>X</button>
                        </div>
                        <div>
                            <StyleDetailForms onSubmit={handleSubmit(patchesClient)}>
                                <div><HeadlineBig>Nome:</HeadlineBig>{editing? <input placeholder={clientDetail?.name} {...register("name")}/> : <p>{clientDetail?.name}</p>}</div>  
                                <div><HeadlineBig>Telefone:</HeadlineBig>{editing? <input placeholder={clientDetail?.phone} {...register("phone")}/> : <p>{clientDetail?.phone}</p>}</div>
                                <div><HeadlineBig>Email:</HeadlineBig>{editing? <input placeholder={clientDetail?.email} {...register("email")}/> : <p>{clientDetail?.email}</p>}</div>
                                {!editing? <StyledButton color="--gray-3" margin="10px 0px" type="submit" onClick={()=>{setEditing(!editing)}}>Editar</StyledButton>: <StyledButton color="--gray-3" margin="10px 0px" type="button" onClick={()=>{setEditing(!editing)}}>Salvar</StyledButton>}
                                <StyledButton type="button" color="--gray-3" margin="0px" onClick={()=>{removeClients(clientDetail.id); setEditing(false)}}>Excluir cliente</StyledButton>
                            </StyleDetailForms>
                            <h3>Contatos</h3>
                            <div>
                                <div>
                                    <StyleContactAddForms onSubmit={handleSubmit(addingContact)}>
                                        <div>
                                            <label htmlFor="name">Nome</label>
                                            <input id="name" placeholder="Nome" {...register("name")}/>
                                        </div>

                                        <div>
                                            <label htmlFor="phone">Telefone</label>
                                            <input id="phone" placeholder="DDD900000000" {...register("phone")}/>
                                        </div>

                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input id="email" placeholder="exemplo@email.com" {...register("email")}/>
                                        </div>

                                        <div>
                                            <label htmlFor="description">Descrição</label>
                                            <input id="description" placeholder="mais informaçoes sobre o contato" {...register("description")}/>
                                        </div>

                                        <StyledButton color="--gray-3" margin="10px 0px" type="submit">Adicionar contato</StyledButton>
                                    </StyleContactAddForms>
                                    
                                </div>
                                <StyledContainerContacts>
                                    {clientDetail?.contacts===0? <><p>Não há nenhum cliente adicionado</p></>:

                                        clientDetail?.contacts.map((client: any)=>{
                                            return(
                                                <li>
                                                    <p>Nome: {client.name}</p>
                                                    <p>Telefone: {client.phone}</p>
                                                    <p>Email: {client.email}</p>
                                                    <p>Descrição: {client.description}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </StyledContainerContacts>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </StyleEditClientModal>
        </>
    )
}