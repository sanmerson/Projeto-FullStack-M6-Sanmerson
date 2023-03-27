import './App.css';
import { UserProvider } from './context/Autorization';
import { RoutesMain } from './components/routes';

function App() {
  return (
    <>
    <UserProvider>
      <RoutesMain />
    </UserProvider>
    </>
  );
}

export default App;
