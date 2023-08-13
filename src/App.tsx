import { UserProvider } from './hooks/useUserContext';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <UserProvider>
      <Login />
      <Dashboard />
    </UserProvider>
  )
}

export default App
