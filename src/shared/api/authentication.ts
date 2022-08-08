import { fakeLogin, fakePassword } from '@/shared/config/fakeAuthenticationData';
import { User } from '@/shared/types/authenticationTypes';
import { authErrors } from '@/shared/config/errors';

export const fakeLoginApi = async (login: string, password: string): Promise<Omit<User, 'rememberPassword'>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === fakeLogin && password === fakePassword) {
        resolve({
          login,
          password,
        });
      } else if (login === fakeLogin && password !== fakePassword) {
        reject(new Error(authErrors.incorrectPassword));
      } else {
        reject(new Error(authErrors.notFound(login)));
      }
    }, 3000);
  });
};
