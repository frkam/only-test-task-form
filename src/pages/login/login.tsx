import styled from 'styled-components';
import { LoginForm } from '@/features/login';

const Wrapper = styled.div`
  display: flex;
  max-width: 64rem;
  margin-top: 14.69vh;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
