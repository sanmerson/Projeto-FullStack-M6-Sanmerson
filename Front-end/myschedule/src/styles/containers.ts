import styled from "styled-components";

interface iContainerMainProps {
    width?: string;
    marginMin?: string;
    marginMax?: string;
}

export const StyledContainerMain =  styled.div<iContainerMainProps> `
    width: 100%;
    display: flex;
    margin: ${props => props.marginMin};
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 720px){
        margin: ${props => props.marginMax};
    }
`

export const StyledContainerLogin = styled.div<iContainerMainProps> `
    background-color: var(--gray-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 50%;
    text-align: center;
    padding: 30px 0px 10px 0px;
    border-radius: 5px;
    border: 1px solid var(--black);

    @media screen and (min-width: 720px){
        width: 25%;
    }
`

export const StyledContainerRedirect = styled.div<iContainerMainProps> `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    text-align: center;
    margin: 0 auto;
`

export const StyledContainerSingup = styled.div<iContainerMainProps> `
    background-color: var(--gray-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 50%;
    text-align: center;
    padding: 30px 0px 10px 0px;
    border-radius: 5px;
    border: 1px solid var(--black);

    @media screen and (min-width: 720px){
        width: 25%;
    }
`