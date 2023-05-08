import styled from "styled-components";

export const StyleForms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;
`


export const StyleDetailForms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;

    &>div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    & > div > input{
        background-color:var(--white);
        border-radius: 5px;
        height: 25px;
        margin: 5px 0px;
        color: var(--black);
        padding: 0px 10px;
    }
`

export const StyleContactAddForms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;

    &>div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    & > div > input{
        background-color:var(--white);
        border-radius: 5px;
        height: 25px;
        margin: 5px 0px;
        padding: 0px 10px;
    }
`