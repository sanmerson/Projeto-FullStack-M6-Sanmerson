export interface iFormLogin{
    username : string;
    password : string;
}

export interface iFormRegister{
    password : string;
    username : string;
    email : string;
    first_name : string;
    last_name : string;
    confirmPassword : string;
}

export interface IProvider{
    children?: React.ReactNode;
    setModalAddOpen?: any;
    setModalDelOpen?: any;
    id?: any;
    selectedClient?: any;
}