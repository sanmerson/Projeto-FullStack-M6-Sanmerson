import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IProvider } from "../../interfaces/typeContexts"
import * as yup from 'yup';
import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import { StyleAddClientModal } from "../../styles/modal";
import { StyledTitleH3 } from "../../styles/typography";
import { StyledAddButton, StyledButton } from "../../styles/styledButton";
import { StyleForms } from "../../styles/forms";
import { StyleLabels } from "../../styles/labels";
import { StyleInput } from "../../styles/input";

export const AddClientModal = ({ children, setModalAddOpen} : IProvider) => {
    const { addClients } = useContext(ClientsContext)

    const schema = yup.object().shape({
        name : yup.string().required("Digite o nome do cliente"),
        phone : yup.string().required("O numero de  Telefone é obrigatorio"),
        email : yup.string(),
      })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
      });
      
    return(
        <>
        <StyleAddClientModal>
            <div className="Background">
                <div className="Content">
                    <div className="Navegation">
                        <StyledTitleH3>Cadastrar novo cliente</StyledTitleH3>
                        <StyledAddButton color='--gray-3' onClick={()=>{setModalAddOpen(false)}}>X</StyledAddButton>
                    </div>
                    <div>
                        <StyleForms onSubmit={handleSubmit(addClients)}> 
                            <StyleLabels htmlFor='name'>Nome</StyleLabels>
                            <StyleInput id='name' {...register("name")}/>
                            <StyleLabels htmlFor='phone'>Telefone</StyleLabels>
                            <StyleInput id='phone' {...register("phone")}/>
                            <StyleLabels htmlFor='email'>Email</StyleLabels>
                            <StyleInput id='email' {...register("email")}/>
                            <StyledButton  color='--black' margin='10px 0px' type='submit'>Salvar</StyledButton>
                        </StyleForms>
                    </div>
                </div>
            </div>
        </StyleAddClientModal>
        </>
    )
}