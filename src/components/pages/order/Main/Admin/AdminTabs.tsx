import { styled } from "styled-components";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../shared/Tab";
import { getTabsConfig } from "./tabsConfig";

export default function AdminTabs() {

    const {
        isCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        setIsCollapsed,
        currentCardSelected
    } = useContext(OrderContext);

    const selectTab = (tabSelected: string) => {
        setIsCollapsed(false)
        setCurrentTabSelected(tabSelected)
    }

    const handleClickReduceAdminPanel = () => {
        setIsCollapsed(!isCollapsed);
    }

    const tabs = getTabsConfig(currentCardSelected)

    return (
        <AdminTabsStyled className="tabs">
            <Tab
                className={isCollapsed ? " active" : ""}
                onClick={handleClickReduceAdminPanel}
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
            />
            {tabs.map((tab) => (
                <Tab
                    key={tab.index}
                    label={tab.label}
                    Icon={tab.Icon}
                    onClick={() => selectTab(tab.index)}
                    className={currentTabSelected === tab.index ? "active" : ""}
                />
            ))}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  button {
    margin-left: 1px;
  }
`;
