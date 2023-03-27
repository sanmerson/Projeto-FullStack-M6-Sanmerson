interface INavBar{
    children : React.ReactNode;
}

export const NavBar = ({ children } : INavBar) => {
    return(
        <div>
            <img alt='logotipo'></img>
            <p>MySchedule</p>
            {children}
        </div>
    )
}