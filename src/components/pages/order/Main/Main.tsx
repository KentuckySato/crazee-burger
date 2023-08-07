import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function Main() {
    return (
        <MainStyled>
            <Basket />
            <Menu />
            <div className="admin-panel">
                <div className="tabs">
                    <button className="tab"><FiChevronDown /></button>
                    <button className="tab active"><AiOutlinePlus />Ajouter un produit</button>
                    <button className="tab"><MdModeEditOutline />Modifier un produit</button>
                </div>
                <div className="panel">
                    <div className="panel__content">Ajouter un produit</div>
                </div>
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    flex: 1;

    display: grid;
    grid-template-columns: 1fr;

    overflow: hidden;
    border-bottom-right-radius: 15px;
    z-index: 1;

    .admin-panel {
        z-index: 100;
        width: 100%;
        position: absolute;
        bottom: 0;
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
            height: 250px;
            position: relative;
            background-color: ${theme.colors.white};
            box-shadow: ${theme.shadows.subtle};
        }
    }
`;
