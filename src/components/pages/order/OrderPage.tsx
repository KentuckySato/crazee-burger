import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { OrderContext } from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState(fakeMenu.LARGE);

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,

        isCollapsed,
        setIsCollapsed,

        currentTabSelected,
        setCurrentTabSelected,

        menu,
        setMenu,
    };

    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    )
}

const OrderPageStyled = styled.div`
    background-color: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      position: relative;
      border-radius: ${theme.borderRadius.extraRound};
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 1400px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
    }
`;
