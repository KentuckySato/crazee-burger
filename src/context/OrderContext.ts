import { createContext } from "react";
import { Product } from "../fakeData/fakeMenu";

export type OrderContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;

    currentTabSelected: string;
    setCurrentTabSelected: (currentTabSelected: string) => void;

    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;

    menu: Product[];
    setMenu: (prevMenu: Product[]) => void;
};

export const OrderContext = createContext<OrderContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
    currentTabSelected: "add",
    setCurrentTabSelected: () => "",
    isCollapsed: false,
    setIsCollapsed: () => false,
    menu: [],
    setMenu: () => [],
});
