import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, removeObjectById } from "../utils/array";
import { Product, ProductId } from "../enums/product";

export const useMenu = () => {
    const [menu, setMenu] = useState<Product[]>(fakeMenu.MEDIUM);

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddProduct = (newProduct: Product) => {
        const menuCopy = deepClone(menu);

        // Set the new product in the menu at the beginning of the array
        setMenu([newProduct, ...menuCopy]);
    }

    const handleDeleteProduct = (idOfProductToDelete: ProductId) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        // filter the item to delete
        const menuCopyUpdated = removeObjectById(idOfProductToDelete, menuCopy)

        setMenu(menuCopyUpdated);
    }

    const handleEditProduct = (productBeingEdited: Product) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        const indexOfProductBeingEdited = menu.findIndex((item) => item.id === productBeingEdited.id);

        menuCopy[indexOfProductBeingEdited] = productBeingEdited;

        setMenu(menuCopy);
    }

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    }

    return { menu, setMenu, handleAddProduct, handleDeleteProduct, handleEditProduct, resetMenu }
}