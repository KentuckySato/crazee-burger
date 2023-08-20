import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { OrderContext, OrderContextType } from "../../../context/OrderContext";
import { useState } from "react";
import { Product, fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "./Main/Admin/Form/AddForm";

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState<Product[]>(fakeMenu.MEDIUM);
    const [newProduct, setNewProduct] = useState<Product>(EMPTY_PRODUCT);


    const handleAddProduct = (newProduct: Product) => {
        const menuCopy = [...menu];

        // Set the new product in the menu at the beginning of the array
        setMenu([newProduct, ...menuCopy]);
    }

    const handleDeleteProduct = (id: number | string) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = [...menu];

        // filter the item to delete
        const menuCopyUpdated = menuCopy.filter((item) => item.id !== id);

        setMenu(menuCopyUpdated);
    }

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    }

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
        resetMenu,

        newProduct,
        setNewProduct
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
