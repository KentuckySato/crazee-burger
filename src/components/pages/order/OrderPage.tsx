import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { OrderContext, OrderContextType } from "../../../context/OrderContext";
import { useState } from "react";
import { Product, ProductId, fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepClone } from "../../../utils/window";

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [menu, setMenu] = useState<Product[]>(fakeMenu.MEDIUM);
    const [newProduct, setNewProduct] = useState<Product>(EMPTY_PRODUCT);
    const [currentCardSelected, setCurrentCardSelected] = useState<ProductId | null>(null)
    const [productSelected, setProductSelected] = useState<Product>(EMPTY_PRODUCT)

    const handleAddProduct = (newProduct: Product) => {
        const menuCopy = deepClone(menu);

        // Set the new product in the menu at the beginning of the array
        setMenu([newProduct, ...menuCopy]);
    }

    const handleDeleteProduct = (id: number | string) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        // filter the item to delete
        const menuCopyUpdated = menuCopy.filter((item) => item.id !== id);

        setMenu(menuCopyUpdated);
    }

    const handleEditProduct = (productBeingEdited: Product) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        // filter the item to delete
        const indexOfProductBeingEdited = menu.findIndex((item) => item.id === productBeingEdited.id);

        menuCopy[indexOfProductBeingEdited] = productBeingEdited;

        setMenu(menuCopy);
    }

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    }

    const selectCard = (id: ProductId) => {
        const productSelected = menu.find((product) => product.id === id);
        setCurrentCardSelected(id);
        setCurrentTabSelected("edit");

        if (productSelected)
            setProductSelected(productSelected);
    }

    const orderContextValue: OrderContextType = {
        isModeAdmin,
        setIsModeAdmin,

        isCollapsed,
        setIsCollapsed,

        currentCardSelected,
        selectCard,

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
        setProductSelected
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
