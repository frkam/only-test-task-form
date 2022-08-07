import { createContext, ReactNode, useReducer, useContext, Reducer, Dispatch } from 'react';
import { fakeLoginApi } from '@/shared/api/authentication';
import { User } from '@/shared/types/authenticationTypes';

interface InitialState {
  status: 'idle' | 'pending' | 'success' | 'rejected';
  user: User | null;
  error: string | null;
}

const savedUser = JSON.parse(localStorage.getItem('user') || 'null');

const initialState: InitialState = {
  status: 'idle',
  user: savedUser,
  error: null,
};

const AuthStateContext = createContext<InitialState>(initialState);
const AuthDispatchContext = createContext<Reducer<any, any> | null>(null);

const reducer = (currentState: InitialState, newState: InitialState) => {
  return { ...currentState, ...newState };
};

export const useAuthState = () => {
  return useContext(AuthStateContext);
};

export const useAuthDispatch = () => {
  return useContext(AuthDispatchContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const loginByEmailAndPassword = async (
  dispatch: Dispatch<any>,
  login: string,
  password: string,
  rememberPassword: boolean,
) => {
  try {
    dispatch({ status: 'pending' });

    const result = await fakeLoginApi(login, password);
    dispatch({
      status: 'success',
      user: result,
      error: null,
    });
    localStorage.setItem('user', JSON.stringify(result));

    if (rememberPassword) {
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('password');
    }
  } catch (e) {
    if (e instanceof Error) {
      dispatch({ status: 'rejected', error: e.message });
    }
  }
};

export const logout = (dispatch: Dispatch<any>) => {
  dispatch({ user: null });
  localStorage.removeItem('user');
};
