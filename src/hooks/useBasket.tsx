import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product, ProductId } from "../enums/product";
import { deepClone } from "../utils/window";
import { useMenu } from "./useMenu";

export const useBasket = () => {
    const [basket, setBasket] = useState<Product[]>(fakeBasket.EMPTY);
    const { menu } = useMenu()

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddProductToBasket = (id: ProductId) => {
        const menuCopy = deepClone(menu);
        const basketCopy = deepClone(basket);

        // Search if product exist in the basket
        const index = basketCopy.findIndex((product) => product.id === id);

        // Search id the menu
        const productClickedOn = menuCopy.find((product) => product.id === id);

        // /!\ I MUST verify if `productClickedOn` is not undefined => typescript doesn't allow and build failed !
        if (index === -1 && productClickedOn) {
            // If product doesn't exist in the basket
            setBasket([{ ...productClickedOn, quantity: 1 }, ...basketCopy]);
        } else {
            // If product exist, increment
            basketCopy[index].quantity += 1;

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

        setBasket(basketCopyUpdated);
    }

    return { basket, setBasket, handleAddProductToBasket, handleDeleteProductBasket };
};
