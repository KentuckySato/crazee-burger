import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../../../shared/Tab";

export default function AdminTabs() {

  const {
    isAddFormVisible, isEditFormVisible,
    isCollapsed,
    setIsAddFormVisible, setIsEditFormVisible, setIsCollapsed
  } = useContext(OrderContext);

  const handleClickAdminPanelButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetForms();

    if ((e.target as HTMLButtonElement).id === "add-product-button") {
      setIsAddFormVisible(true);
    }
    if ((e.target as HTMLButtonElement).id === "edit-product-button") {
      setIsEditFormVisible(true);
    }

    setIsCollapsed(false);
  }

  const resetForms = () => {
    setIsAddFormVisible(false);
    setIsEditFormVisible(false);
  }

  const handleClickReduceAdminPanel = () => {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <AdminTabsStyled className="tabs">
      <Tab
        className={`tab${isCollapsed ? " active" : ""}`}
        onClick={handleClickReduceAdminPanel}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
      />
      <Tab
        id="add-product-button"
        className={`tab${isAddFormVisible ? " active" : ""}`}
        onClick={handleClickAdminPanelButton}
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
      />
      <Tab
        id="edit-product-button"
        className={`tab${isEditFormVisible ? " active" : ""}`}
        onClick={handleClickAdminPanelButton}
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
      />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 3px;
`;
