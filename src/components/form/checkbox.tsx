import styled from 'styled-components';
import { useId } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Inputs } from '@/shared/types/loginFormInputs';
import { StyledLabel } from '@/components/styled/styledLabel';
import { StyledCheckbox } from '@/components/styled/styledCheckbox';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & label {
    margin-left: 3.4rem;
  }

  & label:before {
    position: absolute;
    left: 0;
    content: '';
    top: -20%;
    padding: 5px;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.colors.black};
    border-radius: 4px;
  }

  & input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -20%;
    margin: 3px;
    border-radius: 2px;
    width: 1.4rem;
    height: 1.4rem;
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

interface checkboxProps {
  register: UseFormRegister<Inputs>;
  name: Path<Inputs>;
  required: boolean;
  label: string;
}

export const Checkbox = ({ register, name, label, required = true }: checkboxProps) => {
  const checkboxId = useId();

  return (
    <Container>
      <StyledCheckbox id={checkboxId} type="checkbox" {...register(name, { required })} />
      <StyledLabel htmlFor={checkboxId}>{label}</StyledLabel>
    </Container>
  );
};
