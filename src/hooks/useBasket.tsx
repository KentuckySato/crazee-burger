import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product, ProductId, ProductQuantity } from "../enums/product";
import { deepClone, removeObjectById, findIndexById, findObjectById } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState<ProductQuantity[]>(fakeBasket.MEDIUM)


    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddBasketProduct = (idProductToAdd: ProductId) => {
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

        if (productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
    }

    const incrementProductAlreadyInBasket = (idProductToAdd: ProductId, basketCopy: ProductQuantity[]) => {
        const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const createNewBasketProduct = (idProductToAdd: ProductId, basketCopy: ProductQuantity[], setBasket: (basket: ProductQuantity[]) => void) => {
        // We do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = { id: idProductToAdd, quantity: 1 };
        const newBasket = [newBasketProduct, ...basketCopy];
        setBasket(newBasket);
    }

    const handleEditBasketProduct = (productBeingEdited: Product) => {
        const basketCopy = deepClone(basket)

        const indexOfProductBeingEdited = findIndexById(productBeingEdited.id, basketCopy)

        const newBasketProductUpdate = {
            ...productBeingEdited,
            quantity: basketCopy[indexOfProductBeingEdited].quantity,
        }
        basketCopy[indexOfProductBeingEdited] = newBasketProductUpdate
        setBasket(basketCopy)
    }

    const handleDeleteBasketProduct = (idOfProductToDelete: ProductId) => {
        // We need to copy the menu to avoid mutation
        const basketCopy = deepClone(basket)

        // filter the item to delete
        const basketUpdated = removeObjectById(idOfProductToDelete, basketCopy)
        setBasket(basketUpdated)
    }

    return { basket, setBasket, handleAddBasketProduct, handleEditBasketProduct, handleDeleteBasketProduct }
};

