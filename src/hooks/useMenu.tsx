import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndexById, removeObjectById } from "../utils/array";
import { Product, ProductId } from "../enums/product";
import { syncBothMenu } from "../api/product";

export const useMenu = () => {
    const [menu, setMenu] = useState<Product[]>(fakeMenu.LARGE);

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddMenuProduct = (newProduct: Product, username: string) => {
        const menuCopy = deepClone(menu);


        const menuUpdated = [newProduct, ...menuCopy];

        setMenu(menuUpdated)
        syncBothMenu(username, menuUpdated)
    }

    const handleDeleteMenuProduct = (idOfProductToDelete: ProductId) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        // filter the item to delete
        const menuCopyUpdated = removeObjectById(idOfProductToDelete, menuCopy)

        setMenu(menuCopyUpdated);
    }

    const handleEditMenuProduct = (productBeingEdited: Product) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu);

        const indexOfProductBeingEdited = findIndexById(productBeingEdited.id, menuCopy);

        menuCopy[indexOfProductBeingEdited] = productBeingEdited;

        setMenu(menuCopy);
    }

    const resetMenu = () => {
        setMenu(fakeMenu.MEDIUM);
    }

    return { menu, setMenu, handleAddMenuProduct, handleDeleteMenuProduct, handleEditMenuProduct, resetMenu }
}