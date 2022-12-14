import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '@/shared/assets/logo.svg';

const HeaderContainer = styled.header`
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
    <HeaderContainer>
      <NavLink to="/profile">
        <img src={logo} alt="Logo" />
      </NavLink>
    </HeaderContainer>
  );
};
