import styled from "styled-components";

export const StyleAddClientModal = styled.div`
    position: fixed;
    inset: 0;
    width: 100%
    height: 100vh;
    z-index: 101;

    .Background{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .50);
    }

    .Content{
        background-color: var(--gray-4);
        width: 90%;
        height: 62%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

        @media screen and (min-width: 720px){
            height: 45%;
            width: 20%;
        }
    }

    .Navegation{
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        background-color: var(--black);
        border-radius: 5px 5px 0px 0px;
        color: var(--white);

        @media screen and (min-width: 720px){
            align-items: center;

            & > button{
                height: 40px;
                width: 50px;
            }
        }
    }
`

export const StyleDelClientModal = styled.div`
    position: fixed;
    inset: 0;
    width: 100%
    height: 100vh;
    z-index: 101;

    .Background{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .50);
    }

    .Content{
        background-color: var(--gray-4);
        width: 90%;
        height: 30%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

        & > div {
            width: 90%;
            align-items: start;
        }

        @media screen and (min-width: 720px){
            height: 20%;
            width: 20%;
        }
    }

`