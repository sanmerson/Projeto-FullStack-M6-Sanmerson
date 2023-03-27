import logotipo from '../../imagens/logotipo.png'
import { StyledContainerNavBar } from '../../styles/containers';
import { StyleLogo } from '../../styles/imagens';
import { StyledTitleH2 } from '../../styles/typography';

interface INavBar{
    children : React.ReactNode;
}

export const NavBar = ({ children } : INavBar) => {
    return(
        <StyledContainerNavBar>
            <div>
            <StyleLogo src={logotipo} alt='logotipo'/>
            <StyledTitleH2>MySchedule</StyledTitleH2>
            </div>
            {children}
        </StyledContainerNavBar>
    )
}