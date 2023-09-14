import { createContext } from "react";
import { Product } from "../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../enums/product";

export type OrderContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;

    currentTabSelected: string;
    setCurrentTabSelected: (currentTabSelected: string) => void;

    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;

    menu: Product[];
    handleAddProduct: (product: Product) => void;
    handleDeleteProduct: (id: number | string) => void;
    handleEditProduct: (product: Product) => void;
    resetMenu: () => void;

    newProduct: Product;
    setNewProduct: (newProduct: Product) => void;

    productSelected: Product;
    setProductSelected: (productSelected: Product) => void;

    titleFieldRef: React.MutableRefObject<HTMLInputElement | null>;
};

export const OrderContext = createContext<OrderContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
    currentTabSelected: "add",
    setCurrentTabSelected: () => "",
    isCollapsed: false,
    setIsCollapsed: () => false,
    menu: [],
    handleAddProduct: () => "",
    handleDeleteProduct: () => "",
    handleEditProduct: () => "",
    resetMenu: () => {},

    newProduct: EMPTY_PRODUCT,
    setNewProduct: () => "",

    productSelected: { ...EMPTY_PRODUCT },
    setProductSelected: () => {},

    titleFieldRef: { current: null },
});
