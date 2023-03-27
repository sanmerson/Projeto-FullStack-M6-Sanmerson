import styled from "styled-components";

export const StyleInput = styled.input `
    width: 100%;
    background-color: var(--gray-2);
    height: 50px;
    margin: 5px 0px;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid var(--gray-1);
    color: var(--black);

    @media screen and (min-width: 720px){
        height: 48px;

        &:focus{
            border: 1px solid var(--gray-0);
            color: var(--gray-0);
        }
    }
`