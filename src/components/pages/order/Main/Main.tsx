import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Basket from "./Basket";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { AdminContext } from "../../../../context/AdminContext";
import { useContext } from "react";

export default function Main() {

    const {
        isModeAdmin, isAddFormVisible, isEditFormVisible,
        isCollapsed,
        setIsAddFormVisible, setIsEditFormVisible,
        setIsCollapsed
    } = useContext(AdminContext);

    const handleClickAdminPanelButton = (e) => {
        resetForms();

        if (e.target.id === "add-product-button") {
            setIsAddFormVisible(true);
        }
        if (e.target.id === "edit-product-button") {
            setIsEditFormVisible(true);
        }

        setIsCollapsed(false);
    }

    const resetForms = () => {
        setIsAddFormVisible(false);
        setIsEditFormVisible(false);
    }

    const handleClickReduceAdminPanel = (e) => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <MainStyled>
            <Basket />
            <Menu />

            {isModeAdmin && (
                <div className="admin-panel">
                    <div className="tabs">
                        <button className={`tab${isCollapsed ? " active" : ""}`} onClick={handleClickReduceAdminPanel}>
                            { isCollapsed ? <FiChevronUp /> : <FiChevronDown /> }
                        </button>
                        <button
                            id="add-product-button"
                            className={`tab${isAddFormVisible ? " active" : ""}`}
                            onClick={handleClickAdminPanelButton}
                        ><AiOutlinePlus />Ajouter un produit</button>
                        <button
                            id="edit-product-button"
                            className={`tab${isEditFormVisible ? " active" : ""}`}
                            onClick={handleClickAdminPanelButton}
                        ><MdModeEditOutline />Modifier un produit</button>
                    </div>

                    {!isCollapsed && (
                        <div className="panel">
                            <div className="panel__content">Ajouter un produit</div>
                        </div>
                    )}
                </div>
            )}

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
