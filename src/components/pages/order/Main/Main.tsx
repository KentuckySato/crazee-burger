import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
import { OrderContext } from "../../../../context/OrderContext";
import { useContext } from "react";
import Admin from "./Admin/Admin";

export default function Main() {

    const { isModeAdmin } = useContext(OrderContext);

    return (
        <MainStyled>
            <Basket />
            <div className="menu-and-admin">
                <Menu />
                {isModeAdmin && <Admin />}
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    flex: 1;
    height: calc(95vh - 10vh);

    display: grid;
    grid-template-columns: 1fr;

    border-bottom-right-radius: 15px;
    z-index: 1;

    .menu-and-admin {
        display: grid;
        position: relative;
        overflow: hidden;
        border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    }

`;
