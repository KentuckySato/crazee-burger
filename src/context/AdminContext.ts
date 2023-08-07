import { createContext } from "react";

export type AdminContextType = {
    isModeAdmin: boolean;
    setIsModeAdmin: (setIsModeAdmin: boolean) => void;

    isAddFormVisible: boolean;
    setIsAddFormVisible: (isAddFormVisible: boolean) => void;

    isEditFormVisible: boolean;
    setIsEditFormVisible: (isEditFormVisible: boolean) => void;

    allFormsInvisible: boolean;
    setAllFormsInvisible: (allFormsInvisible: boolean) => void;
};

export const AdminContext = createContext<AdminContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,
    isAddFormVisible: true,
    setIsAddFormVisible: () => false,
    isEditFormVisible: false,
    setIsEditFormVisible: () => false,
    allFormsInvisible: false,
    setAllFormsInvisible: () => false,
});
