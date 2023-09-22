import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/window";
import { Product } from "../enums/product";

export const useMenu = () => {
    const [menu, setMenu] = useState<Product[]>(fakeMenu.MEDIUM);

    // Comportements (gestionnaire de state ou "state handlers")
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

    return { menu, setMenu, handleAddProduct, handleDeleteProduct, handleEditProduct, resetMenu }
}