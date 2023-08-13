import useUserContext from '../hooks/useUserContext';

export function Dashboard() {
  const userContext = useUserContext();
  if(!userContext?.state) return null;

  const { state, dispatch } = userContext;
  const {  name, email } = state;
  const handleLogout = () => { dispatch({ type: 'LOGOUT'}) }
  
  return (
    <>
      <p>Name: { name }</p>
      <p>Email: { email }</p>
      <button onClick={ handleLogout }>Logout</button>
    </>
  )
}