import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { useTheme } from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate } from 'react-router-dom';
import { Input } from '@/shared/ui/input';
import { Checkbox } from '@/shared/ui/checkbox';
import { StyledButton } from '@/shared/ui/styledButton';
import { Inputs } from '@/shared/types/loginFormInputs';
import { formErrors } from '@/shared/config/errors';
import { ErrorMessage } from '@/shared/ui/errorMessage';
import { Ellipse } from '@/shared/ui/ellipse';
import { useAuthDispatch, useAuthState } from '@/entities/user';
import { loginByEmailAndPassword } from '@/features/login';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.7rem;
  position: relative;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    margin-top: 2rem;
  }
`;

const loginFormSchema = yup
  .object()
  .shape({
    email: yup.string().email(formErrors.email).required(formErrors.required),
    password: yup
      .string()
      .required(formErrors.required)
      .min(8, (min) => formErrors.min(min.min)),
  })
  .required();

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { password: localStorage.getItem('password') || '' },
  });
  const dispatch = useAuthDispatch();
  const { user, status, error } = useAuthState();
  const theme = useTheme();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginByEmailAndPassword(dispatch, data.email, data.password, data.rememberPassword);
  };

  if (user) return <Navigate to="/profile" replace />;

  return (
    <Wrapper>
      {error && (
        <ErrorMessage>
          <Ellipse backgroundColor={theme.colors.lightRed} color={theme.colors.red}>
            !
          </Ellipse>
          <p>{error}</p>
        </ErrorMessage>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input label="Логин" name="email" register={register} error={errors.email} />
        <Input label="Пароль" name="password" type="password" register={register} error={errors.password} />
        <Checkbox register={register} name="rememberPassword" required label="Запомнить пароль" />
        <StyledButton primary disabled={status === 'pending'}>
          Войти
        </StyledButton>
      </StyledForm>
    </Wrapper>
  );
};
