import './App.css';
import { UserProvider } from './context/Autorization';
import { RoutesMain } from './components/routes';
import { ClientProvider } from './context/ClientsContext';

function App() {
  return (
    <>
    <UserProvider>
      <ClientProvider>
        <RoutesMain />
      </ClientProvider>
    </UserProvider>
    </>
  );
}

export default App;
