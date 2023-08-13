import { useReducer } from 'react';
import User from '../models/User';

export type Actions = {
  type: 'LOGIN',
  payload: {
    username: string,
    password: string,
  }
} | {
  type: 'LOGOUT'
}

export type UserState = User | null

function getUser(username: string, password: string) : UserState {
  if(username.toLowerCase() == 'brad' && password == 'password') {
    return ({
      name: 'Brad',
      email: 'brad@user.xyz',
    })
  }

  return null;
}


function reducer(state: UserState, action: Actions) : UserState {
  switch(action.type) {
    case 'LOGIN':
      const { username, password } = action.payload;
      return getUser(username, password);
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

export default function useUserReducer() {
  return useReducer(reducer, null);
}