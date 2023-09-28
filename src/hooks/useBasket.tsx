import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product, ProductId } from "../enums/product";
import { deepClone, removeObjectById, findIndexById, findObjectById } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState<Product[]>(fakeBasket.EMPTY)

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddBasketProduct = (productToAdd: Product) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findObjectById(productToAdd.id, basketCopy) !== undefined

        // 1st case: product doesn't exist in the basket
        if (!isProductAlreadyInBasket) {
            createNewProductInBasket(productToAdd, basketCopy, setBasket)
            return
        }
        // 2nd case: product already in the basket
        incrementProductAlreadyInBasket(productToAdd, basketCopy)
    }

    const incrementProductAlreadyInBasket = (productToAdd: Product, basketCopy: Product[]) => {
        const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const createNewProductInBasket = (productToAdd: Product, basketCopy: Product[], setBasket: (basket: Product[]) => void) => {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
    }

    const handleDeleteBasketProduct = (idOfProductToDelete: ProductId) => {
        // We need to copy the menu to avoid mutation
        const basketCopy = deepClone(basket)

        // filter the item to delete
        const basketUpdated = removeObjectById(idOfProductToDelete, basketCopy)
        setBasket(basketUpdated)
    }

    return { basket, setBasket, handleAddBasketProduct, handleDeleteBasketProduct }
};
