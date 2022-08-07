import styled from 'styled-components';
import { useAuthState, useAuthDispatch, logout } from '@/context/authenticationContext';
import { StyledButton } from '@/components/styled/styledButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 27vh;
  gap: 5rem;
`;

const Text = styled.p`
  font-size: 4rem;
  height: 100%;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const Profile = () => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  return (
    <Wrapper>
      <Text>
        Здравствуйте,
        <BoldText>{user?.login}</BoldText>
      </Text>
      <StyledButton
        width={20}
        onClick={() => {
          logout(dispatch);
        }}
      >
        Выйти
      </StyledButton>
    </Wrapper>
  );
};

export default Profile;
