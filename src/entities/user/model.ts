import { createContext, Dispatch, useContext } from 'react';
import { User } from '@/shared/types/authenticationTypes';

export interface State {
  status: 'pending' | 'success' | 'rejected' | 'idle';
  user: User | null;
  error: string | null;
}

const savedUser = JSON.parse(localStorage.getItem('user') || 'null');

export const initialState: State = {
  status: 'idle',
  user: savedUser,
  error: null,
};

export const reducer = (currentState: State, newState: Partial<State>) => {
  return { ...currentState, ...newState };
};

export const AuthStateContext = createContext<State>(initialState);

export const useAuthState = () => {
  return useContext(AuthStateContext);
};

export const AuthDispatchContext = createContext<Dispatch<Partial<State>>>({} as Dispatch<Partial<State>>);

export const useAuthDispatch = () => {
  return useContext(AuthDispatchContext);
};
