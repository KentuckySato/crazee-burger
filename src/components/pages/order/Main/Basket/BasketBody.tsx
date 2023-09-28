import { Product, ProductId } from "../../../../../enums/product";
import BasketProducts from "./BasketProduct";
import EmptyBasket from "./EmptyBasket";

type BasketBodyProps = {
    isBasketEmpty: boolean
    isModeAdmin: boolean
    basket: Product[]
    productSelected: Product
    titleFieldRef: React.MutableRefObject<HTMLInputElement | null>
    setIsCollapsed: (isCollapsed: boolean) => void
    setCurrentTabSelected: (currentTabSelected: string) => void
    setProductSelected: (productSelected: Product) => void
    handleDeleteBasketProduct: (id: ProductId) => void
}

export default function BasketBody({
    isBasketEmpty,
    isModeAdmin,
    basket,
    productSelected,
    titleFieldRef,
    setIsCollapsed,
    setCurrentTabSelected,
    setProductSelected,
    handleDeleteBasketProduct
}: BasketBodyProps) {
    return (
        <>
            {isBasketEmpty ? <EmptyBasket /> : <BasketProducts
                basket={basket}
                isModeAdmin={isModeAdmin}
                productSelected={productSelected}
                titleFieldRef={titleFieldRef}
                setIsCollapsed={setIsCollapsed}
                setCurrentTabSelected={setCurrentTabSelected}
                setProductSelected={setProductSelected}
                handleDeleteBasketProduct={handleDeleteBasketProduct}
            />}
        </>
    )
}
