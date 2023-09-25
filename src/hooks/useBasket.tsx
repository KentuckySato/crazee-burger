import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product, ProductId } from "../enums/product";
import { deepClone } from "../utils/array";

export const useBasket = () => {
    const [basket, setBasket] = useState<Product[]>(fakeBasket.EMPTY);

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddProductToBasket = (product: Product) => {
        const basketCopy = deepClone(basket);

        // Search if product exist in the basket
        const indexOfProductInBasket = basketCopy.findIndex((productInBasket) => productInBasket.id === product.id)

        if (indexOfProductInBasket === -1) {
            // If product doesn't exist in the basket
            const newBasketProduct = { ...product, quantity: 1 }
            setBasket([newBasketProduct, ...basketCopy]);
        } else {
            // If product exist, increment
            basketCopy[indexOfProductInBasket].quantity += 1;

            // Set new basket
            setBasket(basketCopy);
        }
    }

    const handleDeleteProductBasket = (id: ProductId) => {
        // We need to copy the menu to avoid mutation
        const basketCopy = deepClone(basket);

        // filter the item to delete
        const basketCopyUpdated = basketCopy.filter((item: Product) => {
            return item.id !== id
        });

        setBasket(basketCopyUpdated)
    }

    return { basket, setBasket, handleAddProductToBasket, handleDeleteProductBasket };
};
