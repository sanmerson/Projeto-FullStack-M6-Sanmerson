import { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../context/Autorization';
import { iFormLogin } from '../../interfaces/typeContexts';
import { Link, useNavigate } from 'react-router-dom';
import { StyledButton } from '../../styles/styledButton';
import { StyledContainerLogin, StyledContainerMain, StyledContainerRedirect } from '../../styles/containers';
import { StyleForms } from '../../styles/forms';
import { StyleLabels } from '../../styles/labels';
import { StyleInput } from '../../styles/input';
import { Headline, StyledTitleH1, StyleErrorText } from '../../styles/typography';
import { StyleLink } from '../../styles/link';


export const Login = () => {
    const {LoginUser} = useContext(UserContext);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        password : yup.string().required('digite sua senha'),
        username : yup.string().required('digite o seu username')
    })

    const { register, handleSubmit, formState: { errors }} = useForm<iFormLogin>({
        resolver: yupResolver(schema)
    })

    useEffect(() =>{
        if(window.localStorage.getItem("@MySchedule:token")){
            navigate('/dashboard',{replace: true})
        }
    }, [])
    

    return (
        <>
        <StyledContainerMain marginMin='25% auto' marginMax='7% auto'>
            <StyledContainerLogin>
                <StyledTitleH1 margim='10px 0px'>MySchedule</StyledTitleH1>
                <div>
                    <StyleForms onSubmit={handleSubmit(LoginUser)}>
                        <StyleLabels htmlFor='username'>Username</StyleLabels>
                        <StyleInput id='username' placeholder="Username" {...register("username")} />
                        <StyleErrorText>{errors.username?.message}</StyleErrorText>
                        <StyleLabels htmlFor='password'>Senha</StyleLabels>
                        <StyleInput id='password' type='password' placeholder="Digite sua Senha" {...register("password")}/>
                        <StyleErrorText>{errors.password?.message}</StyleErrorText>

                        <StyledButton color='--black' margin='20px 0px' type='submit'>Login</StyledButton>
                    </StyleForms>
                </div>
                <StyledContainerRedirect>
                    <Headline>Ainda não possui uma conta?</Headline>
                    <StyleLink color='--black' margin='10px 0px' to='/signup'>Cadastrar-se</StyleLink>
                </StyledContainerRedirect>
            </StyledContainerLogin>
        </StyledContainerMain>
        </>
    )
}