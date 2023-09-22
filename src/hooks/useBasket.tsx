import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { Product } from "../enums/product";

export const useBasket = () => {
    const [basket, setBasket] = useState<Product[]>(fakeBasket.LARGE);

    return { basket, setBasket };
};
