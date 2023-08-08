import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs() {

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
    <AdminTabsStyled className="tabs">
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
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
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
  }
`;
