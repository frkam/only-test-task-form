import { fakeLogin, fakePassword } from '@/shared/config/fakeAuthenticationData';

export const fakeLoginApi = async (login: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === fakeLogin && password === fakePassword) {
        resolve({
          login,
          password,
        });
      } else if (login === fakeLogin && password !== fakePassword) {
        reject(new Error('Вы ввели неправильный пароль'));
      } else {
        reject(new Error('Аккаунта с такими данными не существует'));
      }
    }, 3000);
  });
};
