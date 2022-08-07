import styled from 'styled-components';

interface EllipseProps {
  color: string;
  backgroundColor: string;
}

export const Ellipse = styled.div<EllipseProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.white};
  color: ${(props) => props.color || props.theme.colors.black};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  user-select: none;
`;
