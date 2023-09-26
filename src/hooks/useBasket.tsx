import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product, ProductId } from "../enums/product";
import { deepClone, findIndexWithId } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState<Product[]>(fakeBasket.EMPTY)

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddProductToBasket = (productToAdd: Product) => {
        const basketCopy = deepClone(basket)

        // Search if product exist in the basket and return number `index` or `-1`
        const indexOfProductInBasket = findIndexWithId(productToAdd.id, basketCopy)

        // 1. If product doesn't exist in the basket
        if (indexOfProductInBasket === -1) {
            const newBasketProduct = { ...productToAdd, quantity: 1 }
            setBasket([newBasketProduct, ...basketCopy])
        } else {
            // 2. else increment quantity
            basketCopy[indexOfProductInBasket].quantity += 1
            setBasket(basketCopy);
        }
    }

    const handleDeleteProductBasket = (idOfProductToDelete: ProductId) => {
        // We need to copy the menu to avoid mutation
        const basketCopy = deepClone(basket)

        // filter the item to delete
        const basketCopyUpdated = basketCopy.filter((item: Product) => {
            return item.id !== idOfProductToDelete
        })

        setBasket(basketCopyUpdated)
    }

    return { basket, setBasket, handleAddProductToBasket, handleDeleteProductBasket }
};
