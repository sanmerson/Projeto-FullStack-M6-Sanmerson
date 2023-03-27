import './App.css';
import { UserProvider } from './context/Autorization';
import { RoutesMain } from './components/routes';
import { ClientProvider } from './context/ClientsContext';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
    <GlobalStyle/>
        <UserProvider>
          <ClientProvider>
            <RoutesMain />
          </ClientProvider>
        </UserProvider>
    </>
  );
}

export default App;
