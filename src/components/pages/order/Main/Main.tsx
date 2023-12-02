import { styled } from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./Basket/Basket"
import MainRightSide from "./MainRightSide/MainRightSide"

export default function Main() {

    return (
        <MainStyled>
            <Basket />
            <MainRightSide />
        </MainStyled >
    )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;

    @media(max-width: 768px) {
        height: 100dvh;
        border-radius: 0;

        grid-template-columns: 1fr;
        overflow: hidden;

        .basket {
            display: none;
        }
    }
`
