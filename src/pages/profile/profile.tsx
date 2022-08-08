import styled from 'styled-components';
import { useAuthState, useAuthDispatch } from '@/entities/user';
import { logout } from '@/features/login';
import { StyledButton } from '@/shared/ui/styledButton';
import { breakpoints } from '@/shared/lib/breakpoints';
import { BoldText } from '@/shared/ui/boldText';
import { Text } from '@/shared/ui/text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 27vh;
  gap: 5rem;
  text-align: center;
  margin: 0 2rem;

  ${breakpoints.device.tablet} {
    text-align: left;
  }
`;

const Profile = () => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const onExit = () => {
    logout(dispatch);
  };

  return (
    <Wrapper>
      <Text>
        Здравствуйте,
        <BoldText> {user?.login}</BoldText>
      </Text>
      <StyledButton width={20} onClick={onExit}>
        Выйти
      </StyledButton>
    </Wrapper>
  );
};

export default Profile;
