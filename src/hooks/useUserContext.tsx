import React, { createContext, Dispatch, useContext } from 'react';
import useUserReducer, { Actions, UserState } from './useUserReducer';

const UserContext = createContext<{state: UserState; dispatch: Dispatch<Actions>} | null>(null); // start will null

export default function useUserContext() {
  const userContext = useContext(UserContext);

  if(!userContext) throw new Error("No user context found."); // throw error if user does not exist
  return userContext; // return user if user exists
}

export function UserProvider({ children } : { children: React.ReactNode }) {
  const [state, dispatch] = useUserReducer();
  const value = { state, dispatch};

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  )
}