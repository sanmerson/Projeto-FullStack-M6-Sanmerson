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