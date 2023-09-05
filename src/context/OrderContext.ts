import { createContext } from "react";
import { Product, ProductId } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../components/pages/order/Main/Admin/AdminPanel/AddForm";

export type OrderContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;

    currentTabSelected: string;
    setCurrentTabSelected: (currentTabSelected: string) => void;

    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;

    currentCardSelected: ProductId | null;
    selectCard: (id: ProductId) => void;

    menu: Product[];
    handleAddProduct: (product: Product) => void;
    handleDeleteProduct: (id: number | string) => void;
    resetMenu: () => void;

    newProduct: Product;
    setNewProduct: (newProduct: Product) => void;
};

export const OrderContext = createContext<OrderContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
    currentTabSelected: "add",
    setCurrentTabSelected: () => "",
    isCollapsed: false,
    setIsCollapsed: () => false,
    currentCardSelected: null,
    selectCard: () => "",
    menu: [],
    handleAddProduct: () => "",
    handleDeleteProduct: () => "",
    resetMenu: () => {},

    newProduct: EMPTY_PRODUCT,
    setNewProduct: () => "",
});
