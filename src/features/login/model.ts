import { Dispatch } from 'react';
import { fakeLoginApi } from '@/shared/api';
import { State } from '@/entities/user';

export const loginByEmailAndPassword = async (
  dispatch: Dispatch<Partial<State>>,
  login: string,
  password: string,
  rememberPassword: boolean,
) => {
  try {
    dispatch({ status: 'pending' });

    const result = await fakeLoginApi(login, password);
    dispatch({
      status: 'success',
      user: { ...result, rememberPassword },
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

export const logout = (dispatch: Dispatch<Partial<State>>) => {
  dispatch({ user: null });
  localStorage.removeItem('user');
};
