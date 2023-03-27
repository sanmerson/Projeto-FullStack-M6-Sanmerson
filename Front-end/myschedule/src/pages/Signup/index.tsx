import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/Autorization";
import { iFormRegister } from "../../interfaces/typeContexts";
import { StyledContainerMain, StyledContainerSingup } from "../../styles/containers";
import { StyledTitleH1, StyleErrorText } from "../../styles/typography";
import { StyleForms } from "../../styles/forms";
import { StyledButton } from "../../styles/styledButton";
import { StyleLabels } from "../../styles/labels";
import { StyleInput } from "../../styles/input";
import { StyleLink } from "../../styles/link";

export const Signup = () => {
    const { RegisterUser } = useContext(UserContext);

    const schema = yup.object().shape({
        password : yup.string()
            .required('digite uma senha')
            .matches(/[0-9]/,'A senha deve possuir um numero')
            .matches(/[a-z]/,'A senha deve possuir uma letra')
            .matches(/[^\w]/,'A senha deve possuir um caractere especial')
            .min(8, 'A senha deve ter no minimo 8 caracteres'),
        confirmPassword : yup.string()
            .required('Confirmação de senha e obrigatoria')
            .oneOf([yup.ref('password')],
            'Confirmação de senha deve ser igual a senha'
            ),
        username : yup.string()
            .required('digite o seu username'),
        email : yup.string()
            .required('digite o seu email')
            .email('Deve ser um e-mail válido'),
        first_name : yup.string()
            .required('digite o seu nome'),
        last_name : yup.string()
            .required('digite o seu sobrenome'),
    })

    const { register, handleSubmit, formState: { errors }} = useForm<iFormRegister>({
        resolver: yupResolver(schema)
    })
    return(
        <>
        <StyledContainerMain marginMin='10% auto' marginMax='7% auto'>
            <StyledContainerSingup>
                <StyledTitleH1 margim='10px 0px'>Cadastre-se</StyledTitleH1>
                <StyleForms onSubmit={handleSubmit(RegisterUser)}>
                    <StyleLabels htmlFor='username' >Username</StyleLabels>
                    <StyleInput id='username' placeholder="Username" {...register("username")}/>
                    <StyleErrorText>{errors.username?.message}</StyleErrorText>

                    <StyleLabels htmlFor='email'>Email</StyleLabels>
                    <StyleInput id='email' placeholder="Email" {...register("email")}/>
                    <StyleErrorText>{errors.email?.message}</StyleErrorText>

                    <StyleLabels htmlFor='password'>Senha</StyleLabels>
                    <StyleInput id='password' placeholder="Senha" type='password' {...register("password")}/>
                    <StyleErrorText>{errors.password?.message}</StyleErrorText>

                    <StyleLabels htmlFor='confirmPassword' >Confirme sua senha</StyleLabels>
                    <StyleInput id='confirmPassword' placeholder="Confirme sua senha" type='password'{...register("confirmPassword")}/>
                    <StyleErrorText>{errors.confirmPassword?.message}</StyleErrorText>

                    <StyleLabels htmlFor='first_name' >Nome</StyleLabels>
                    <StyleInput id='first_name' placeholder="Nome" {...register("first_name")}/>
                    <StyleErrorText>{errors.first_name?.message}</StyleErrorText>
                    
                    <StyleLabels htmlFor='last_name' >Sobrenome</StyleLabels>
                    <StyleInput id='last_name' placeholder="Sobrenome" {...register("last_name")}/>
                    <StyleErrorText>{errors.last_name?.message}</StyleErrorText>

                    <StyledButton color='--black' margin='20px 0px' type='submit'>Cadastrar</StyledButton>
                </StyleForms>
                <StyleLink color='--black' margin='10px 5%'  to='/'>Voltar</StyleLink>
            </StyledContainerSingup>
        </StyledContainerMain>
        </>
    )
}