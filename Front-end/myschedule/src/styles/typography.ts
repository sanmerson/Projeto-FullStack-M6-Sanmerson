import styled from "styled-components";

interface iTypographyMainProps{
    margim?: string;
}


export const StyledTitleH1 = styled.h1<iTypographyMainProps>`
    font-weight: bold;
    font-size: 20px;
    color: var(--gray-0);
    margin: ${(props => props.margim)}
`
export const StyledTitleH2 = styled.h2<iTypographyMainProps>`
    font-weight: bold;
    font-size: 16px;
    color: var(--gray-0);
    margin: ${(props => props.margim)}
`
export const StyledTitleH3 = styled.h3<iTypographyMainProps>`
    font-weight: bold;
    font-size: 16px;
    color: var(--gray-0);
    margin: ${(props => props.margim)}
`
export const Headline = styled.p<iTypographyMainProps>`
    font-size: 12px;
    color: var(--gray-1);
    margin: ${(props => props.margim)}
`

export const HeadlineBold = styled.p<iTypographyMainProps>`
    font-size: 12px;
    font-weight: bold;
    color: var(--gray-1);
    margin: ${(props => props.margim)}
`

export const HeadlineItalic = styled.p<iTypographyMainProps>`
    font-size: 12px;
    font-style: italic;
    color: var(--gray-1);
    margin: ${(props => props.margim)}
`

export const StyleErrorText = styled.p<iTypographyMainProps>`
    font-size: 12px;
    font-style: italic;
    color: red;
    margin: ${(props => props.margim)}
`