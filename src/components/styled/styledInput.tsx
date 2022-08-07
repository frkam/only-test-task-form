import styled from 'styled-components';

interface StyledInputProps {
  error: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  max-width: 64rem;
  width: 100%;
  border-radius: 8px;
  height: 6rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grey};
  padding: 2rem;
  font-size: 1.6rem;
  color: ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.black)};
  border: 1px solid ${(props) => (props.error ? props.theme.colors.red : 'transparent')};

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.black};
  }
`;
