import styled from "styled-components";
import { Link } from "react-router-dom";

interface iLinkMainProps {
    color?: string;
    margin?: string;
}

export const StyleLink = styled(Link)<iLinkMainProps>`
    color: var(--white);
    background-color: var(${props => props.color});
    border-radius: 5px;
    padding: 4% 10px;
    text-decoration: none;
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

export const StyleLinkText = styled(Link)<iLinkMainProps>`
    color: var(--gray-0);
    background-color: var(${props => props.color});
    border-radius: 5px;
    padding: 5px;
    height: 30px;
    width: 80px;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 720px){
        padding: 5px;
        height: 40px;
        width: 67px;
        font-size: 12px;

        &:hover{
            background-color: var(--gray-2);
        }
    }
`