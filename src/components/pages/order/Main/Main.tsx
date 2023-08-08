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

        .admin {
            height: 250px;
            z-index: 100;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

            .tabs {
                display: flex;
                gap: 3px;
                padding: 0 70px;

                button.tab {
                    padding: 11px 20px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background-color: ${theme.colors.white};
                    color: ${theme.colors.greySemiDark};
                    border: none;
                    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

                    box-shadow: ${theme.shadows.subtle};

                    font-size: 16px;
                    font-weight: 400;
                    line-height: normal;
                    text-align: center;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }

                    &.active {
                        color: ${theme.colors.white};
                        background-color: ${theme.colors.dark};
                    }

                    svg {

                    }

                }
            }

            .panel {
                border: 1px solid ${theme.colors.greyLight};
                border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

                position: relative;
                background-color: ${theme.colors.white};
                box-shadow: ${theme.shadows.subtle};
            }
        }
    }

`;
