import styled from 'styled-components';

interface StyledButtonProps {
  primary?: boolean;
  width?: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.primary ? props.theme.colors.blue : props.theme.colors.grey)};
  color: ${(props) => (props.primary ? props.theme.colors.white : props.theme.colors.black)};
  border-radius: 8px;
  max-width: 64rem;
  border: none;
  font-weight: 700;
  height: 6rem;
  width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
  cursor: pointer;
  font-size: 1.8rem;
  transition: background-color 0.5s;

  &:disabled {
    background-color: ${(props) => props.theme.colors.lightBlue};
  }
`;
