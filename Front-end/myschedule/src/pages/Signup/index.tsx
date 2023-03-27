import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/Autorization";
import { iFormRegister } from "../../interfaces/typeContexts";

export const Signup = () => {
    const { RegisterUser } = useContext(UserContext);

    const schema = yup.object().shape({
        password : yup.string()
            .required('digite uma senha'),
           // .matches(/[0-9]/,'A senha deve possuir um numero')
           // .matches(/[a-z]/,'A senha deve possuir uma letra')
            //.matches(/[^\w]/,'A senha deve possuir um caractere especial')
            //.min(8, 'A senha deve ter no minimo 8 caracteres'),
        confirmPassword : yup.string()
            .oneOf([yup.ref('password')],
            'Confirmação de senha deve ser igual a senha'
            ),
        username : yup.string()
            .required('digite o seu username'),
        email : yup.string()
            .required('digite o seu email')
            .email('Deve ser um e-mail válido'),
        first_name : yup.string()
            .required('digite o seu Nome'),
        last_name : yup.string()
            .required('digite o seu Sobrenome'),
    })

    const { register, handleSubmit, formState: { errors }} = useForm<iFormRegister>({
        resolver: yupResolver(schema)
    })
    return(
        <>
        <div>
            <h3>Cadastre-se</h3>
        </div>
        <div>
            <form onSubmit={handleSubmit(RegisterUser)}>
                <label htmlFor='username' >Username</label>
                <input id='username' placeholder="Username" {...register("username")}/>
                <p>{errors.username?.message}</p>

                <label htmlFor='email'>email</label>
                <input id='email' placeholder="Email" {...register("email")}/>
                <p>{errors.email?.message}</p>

                <label htmlFor='password' >password</label>
                <input id='password' placeholder="Senha" type='password' {...register("password")}/>
                <p>{errors.password?.message}</p>

                <label htmlFor='confirmPassword' >Confirme sua senha</label>
                <input id='confirmPassword' placeholder="Confirme sua senha" type='password'{...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>

                <label htmlFor='first_name' >Nome</label>
                <input id='first_name' placeholder="Nome" {...register("first_name")}/>
                <p>{errors.first_name?.message}</p>
                
                <label htmlFor='last_name' >Sobrenome</label>
                <input id='last_name' placeholder="Sobrenome" {...register("last_name")}/>
                <p>{errors.last_name?.message}</p>

                <button type='submit'>Cadastrar</button>
            </form>
            <Link to='/'>Voltar</Link>
        </div>
        </>
    )
}