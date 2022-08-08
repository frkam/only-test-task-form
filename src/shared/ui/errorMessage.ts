import styled from 'styled-components';

export const ErrorMessage = styled.div`
  height: 6rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.pink};
  border: 1px solid ${(props) => props.theme.colors.red};
  border-radius: 8px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1.4rem;
  position: absolute;
  top: -8rem;
`;
