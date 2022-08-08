export const formErrors = {
  required: 'Это обязательное поле',
  email: 'Невалидная почта',
  min: (min: number) => `Минимальная длина пароля - ${min} символов`,
};

export const authErrors = {
  incorrectPassword: 'Вы ввели неправильный пароль',
  notFound: (username: string) => `Пользователя ${username} не существует`,
};
