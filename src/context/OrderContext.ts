import { createContext } from "react";

export type OrderContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;

    currentTabSelected: string,
    setCurrentTabSelected: (currentTabSelected: string) => void,

    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
};

export const OrderContext = createContext<OrderContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
    currentTabSelected: "add",
    setCurrentTabSelected: () => "",
    isCollapsed: false,
    setIsCollapsed: () => false,
});
