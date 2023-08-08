import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import { styled } from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {

    const { isCollapsed } = useContext(OrderContext);

    return (
        <AdminStyled className="admin">
            <AdminTabs />
            {!isCollapsed && (
                <AdminPanel />
            )}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;
