import styled from 'styled-components';
import logo from '@/shared/assets/logo.svg';

const StyledHeader = styled.header`
  height: 15.8rem;
  width: 100%;
  text-align: center;
  position: relative;

  img {
    position: absolute;
    inset: 0;
    margin: auto;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
    </StyledHeader>
  );
};
