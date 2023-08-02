import LogoApp from "../../LogoApp"
import LoginForm from "./LoginForm"
import styled from 'styled-components';

export default function LoginPage() {

  // Render
  return (
    <LoginPageStyled>
      <LogoApp />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`

  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  &::before {
    content: "";
    background: url("/images/burger-background.jpg") center center / cover #000000b2;
    background-blend-mode: darken;
    position: absolute;
    inset: 0px;
    z-index: -1;
  }

  .logo {
      transform: scale(2.5);
  }

  .loginForm {
    width: 400px;
    padding: 2.5rem 2rem;
  }
`;