import { useId } from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { StyledInput } from '@/shared/ui/styledInput';
import { Inputs } from '@/shared/types/loginFormInputs';
import { StyledLabel } from '@/shared/ui/styledLabel';

type Props = {
  register: UseFormRegister<Inputs>;
  label: string;
  name: Path<Inputs>;
  error?: FieldError;
  required?: boolean;
  type?: 'text' | 'password' | 'number';
};

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 11.4rem;
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: 1.4rem;
`;

export const Input = ({ register, label, name, error, required = true, type = 'text' }: Props) => {
  const inputId = useId();

  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
      <StyledInput
        id={inputId}
        {...register(name, { required })}
        name={name}
        type={type}
        error={Boolean(error?.message)}
      />
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </StyledInputContainer>
  );
};
