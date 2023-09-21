import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { OrderContext, OrderContextType } from "../../../context/OrderContext";
import { useRef, useState } from "react";
import { Product } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [newProduct, setNewProduct] = useState<Product>(EMPTY_PRODUCT);
    const [productSelected, setProductSelected] = useState<Product>(EMPTY_PRODUCT)
    const titleFieldRef = useRef<HTMLInputElement>(null);

    const { menu, handleAddProduct, handleDeleteProduct, handleEditProduct, resetMenu } = useMenu()

    const orderContextValue: OrderContextType = {
        isModeAdmin,
        setIsModeAdmin,

        isCollapsed,
        setIsCollapsed,

        currentTabSelected,
        setCurrentTabSelected,

        menu,
        handleAddProduct,
        handleDeleteProduct,
        handleEditProduct,
        resetMenu,

        newProduct,
        setNewProduct,

        productSelected,
        setProductSelected,

        titleFieldRef
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
