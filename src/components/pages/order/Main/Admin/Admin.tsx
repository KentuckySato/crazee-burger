import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { styled } from "styled-components";

export default function Admin() {

    const {
        isAddFormVisible, isEditFormVisible,
        isCollapsed,
        setIsAddFormVisible, setIsEditFormVisible, setIsCollapsed
    } = useContext(OrderContext);

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
        <AdminStyled className="admin">
            <div className="tabs">
                <button className={`tab${isCollapsed ? " active" : ""}`} onClick={handleClickReduceAdminPanel}>
                    {isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
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
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
  background-color: ${theme.colors.white};
`;
