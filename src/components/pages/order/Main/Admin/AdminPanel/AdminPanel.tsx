import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { OrderContext } from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "../tabsConfig";

export default function AdminPanel() {

    const { currentTabSelected } = useContext(OrderContext);

    const tabs = tabsConfig
    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled className="panel-admin">
            <div>{tabSelected && tabSelected.Content}</div>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 240px;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    box-sizing: border-box;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 30px 5%;
`;
