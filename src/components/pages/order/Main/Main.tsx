import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket/Basket";
import MainRightSide from "./MainRightSide/MainRightSide";

export default function Main() {

    return (
        <MainStyled>
            <Basket />
            <MainRightSide />
        </MainStyled >
    )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    flex: 1;
    height: calc(95vh - 10vh);

    display: grid;
    grid-template-columns: 25% 1fr;

    border-bottom-right-radius: 15px;
    z-index: 1;
`;
