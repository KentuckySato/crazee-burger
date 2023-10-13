import Logo from "../../shared/Logo"
import LoginForm from "./LoginForm"
import styled from 'styled-components';
import { fadeInAnimation } from "../../../theme/animations";
import { theme } from "../../../theme";

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo className={"logo-login-page"} />
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
  animation: ${fadeInAnimation} ${theme.animations.speed.slowPlus} ease-in;

  &::before {
    content: "";
    background: url("/images/burger-background.jpg") center center / cover #000000b2;
    background-blend-mode: darken;
    position: absolute;
    inset: 0px;
    z-index: -1;
  }

  .logo-login-page {
      transform: scale(2.5);
  }
`;