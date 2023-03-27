import styled from "styled-components"

interface iButtonsMainProps {
    margin ?: string;
    color ?: string;
}

export const StyledButton = styled.button<iButtonsMainProps>`
    color: var(--white);
    background-color: var(${props => props.color});
    height: 50px;
    width: 100%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    margin: ${props => props.margin};

    @media screen and (min-width: 720px){
        padding: 15px 10px;

        &:hover{
            background-color: var(--gray-2);
            color: var(--black);
        }
    }
`

export const StyledAddButton = styled.button<iButtonsMainProps>`
    color: var(--white);
    background-color: var(${props => props.color});
    height: 30px;
    width: 10%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    margin: ${props => props.margin};

    @media screen and (min-width: 720px){
        height: 40px;
        width: 5%;
        font-size: 20px;
        text-align: center;

        &:hover{
            background-color: var(--gray-2);
            color: var(--black);
        }
    }
`

export const StyledButtonNav  = styled.button<iButtonsMainProps>`
    color: var(--white);
    background-color: var(--black);
    height: 40px;
    width: 20%;
    margin: 0px 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;


    @media screen and (min-width: 720px){
        height: 40px;
        width: 5%;
        text-align: center;

        &:hover{
            background-color: var(--gray-1);
            border: 2px solid var(--white);
            color: var(--black);
        }
    }
`