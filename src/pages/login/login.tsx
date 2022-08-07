import styled from 'styled-components';
import { Form } from '@/pages/login/form';

const StyledContainer = styled.div`
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
    <StyledContainer>
      <Form />
    </StyledContainer>
  );
};

export default Login;
