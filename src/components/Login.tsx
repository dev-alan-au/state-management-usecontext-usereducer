import { useState } from 'react';
import useUserContext from '../hooks/useUserContext';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useUserContext();
  if(!userContext || userContext.state) return null;

  const { dispatch } = userContext;
  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: {
      username,
      password,
    }});
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <input type="text" name="username" value={username} onChange={ev => setUsername(ev.target.value)} placeholder="Username" />
      <input type="password" name="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="Password" />
      <button onClick={ handleLogin }>Login</button>
    </>
  )
}