import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
export default function Main() {
    return (
        <MainStyled>
            <Basket />
            <Menu />
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    flex: 1;

    display: grid;
    grid-template-columns: 1fr;

    overflow-y: scroll;
`;
