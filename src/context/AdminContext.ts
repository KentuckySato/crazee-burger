import { createContext } from "react";

export type AdminContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;
};

export const AdminContext = createContext<AdminContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
});
