import { useContext } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../context/Autorization';
import { iFormLogin } from '../../interfaces/typeContexts';
import { Link } from 'react-router-dom';


export const Login = () => {
    const {LoginUser} = useContext(UserContext);

    const schema = yup.object().shape({
        password : yup.string().required('digite sua senha'),
        username : yup.string().required('digite o seu username')
    })

    const { register, handleSubmit, formState: { errors }} = useForm<iFormLogin>({
        resolver: yupResolver(schema)
    })

    return (
        <>
        <div>
            <h3>Login</h3>
        </div>
        <div>
            <form onSubmit={handleSubmit(LoginUser)}>
                <label htmlFor='username'>Username</label>
                <input id='username' placeholder="Username" {...register("username")} />

                <label htmlFor='password'>Password</label>
                <input id='password' type='password' placeholder="Password" {...register("password")}/>

                <button type='submit'>Login</button>
            </form>
        </div>
        <div>
            <p>Ainda não possui uma conta?</p>
            <Link to='/signup'>Cadastrar-se</Link>
        </div>
        </>
    )
}