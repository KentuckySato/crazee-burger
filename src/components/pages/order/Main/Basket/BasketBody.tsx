import { Product, ProductId } from "../../../../../enums/product";
import BasketProducts from "./BasketProduct";
import EmptyBasket from "./EmptyBasket";

type BasketBodyProps = {
    isBasketEmpty: boolean
    basket: Product[]
    handleDeleteProductBasket: (id: ProductId) => void
}

export default function BasketBody({ isBasketEmpty, basket, handleDeleteProductBasket }: BasketBodyProps) {
    return (
        <>
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} handleDeleteProductBasket={handleDeleteProductBasket} />}
        </>
    )
}
