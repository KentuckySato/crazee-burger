import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { ProductId, ProductQuantity } from "../enums/product";
import { deepClone, removeObjectById, findIndexById, findObjectById } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState<ProductQuantity[]>(fakeBasket.EMPTY)

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


    const handleDeleteBasketProduct = (idOfProductToDelete: ProductId) => {
        const basketUpdated = removeObjectById(idOfProductToDelete, basket)
        setBasket(basketUpdated)
    }

    return { basket, setBasket, handleAddBasketProduct, handleDeleteBasketProduct }
};

