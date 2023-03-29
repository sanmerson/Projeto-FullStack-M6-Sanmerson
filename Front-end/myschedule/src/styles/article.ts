import styled from "styled-components";

export const StyledContainerClients = styled.article`
    background-color: var(--gray-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 50%;
    min-height: 120px;
    text-align: center;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid var(--black);
    border-top: none;

    & > .Clients{
        margin: 5px 0px;
        width: 100%;
        background-color: var(--gray-3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        border-radius: 5px;
        padding: 20px 5px;

        @media screen and (min-width: 720px){
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: start;
            align-items: center;
            width: 90%;
            height: 50%;
            align-items: center;
        }
    }

    & > .Clients > li{
        width: 95%;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: var(--gray-4);
        border: 2px solid transparent;
        border-radius: 5px;

        @media screen and (min-width: 720px){
            flex-direction: column;
            width: 15%;
            min-height: 180px;
            &:hover{
                border: 2px solid white;
                color: var(--black);
            }
        }
    }

    & > .Clients > li > button{
        color: var(--white);
        background-color: var(--black);
        height: 30px;
        width: 10%;
        border-radius: 5px;
        font-weight: 500;
        font-size: 15px;
    
        @media screen and (min-width: 720px){
            height: 30px;
            width: 100%;
            &:hover{
                background-color: var(--gray-2);
                color: var(--black);
            }
        }
    }

    & > .Clients > li > p{
        font-weight: bold;
        font-size: 16px;
        color: var(--gray-1);
        width: 40%;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (min-width: 720px){
            width: 100%;
        }
    }

    @media screen and (min-width: 720px){
        padding: 0px 0px 30px 0px;
        width: 90%;
        align-items: center;
        min-height: 200px;
    }


`