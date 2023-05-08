import './App.css';
import { UserProvider } from './context/Autorization';
import { RoutesMain } from './components/routes';
import { ClientProvider } from './context/ClientsContext';
import { GlobalStyle } from './styles/global';
import { ContactsProvider } from './context/ContactsContext';

function App() {
  return (
    <>
    <GlobalStyle/>
        <UserProvider>
          <ClientProvider>
            <ContactsProvider>
              <RoutesMain />
            </ContactsProvider>
          </ClientProvider>
        </UserProvider>
    </>
  );
}

export default App;
