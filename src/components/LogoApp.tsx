import styled from 'styled-components';
import { theme } from '../theme/index';

export default function LogoApp() {
  return (
    <LogoAppStyled>
      <h1>Crazee <img src="/images/logo-burger.png" alt="logo-burger" /> Burger</h1>
    </LogoAppStyled>
  )
}


const LogoAppStyled = styled.div`

  color: ${theme.colors.primary};

  text-align: center;
  font-family: Amatic SC;
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 115px; /* 104.545% */
  letter-spacing: 1.5px;
  text-transform: uppercase;

  img {
    width: 200px;
    height: 150px;
    flex-shrink: 0;
  }
`;