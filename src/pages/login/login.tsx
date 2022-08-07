import styled from 'styled-components';
import { Form } from '@/pages/login/form';

const StyledContainer = styled.div`
  display: flex;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14.69vh;
`;

const Login = () => {
  return (
    <StyledContainer>
      <Form />
    </StyledContainer>
  );
};

export default Login;
