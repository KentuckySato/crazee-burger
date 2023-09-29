import BasketProducts from "./BasketProduct";
import EmptyBasket from "./EmptyBasket";

type BasketBodyProps = {
    isBasketEmpty: boolean
}

export default function BasketBody({ isBasketEmpty }: BasketBodyProps) {
    return (
        <>
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
        </>
    )
}
