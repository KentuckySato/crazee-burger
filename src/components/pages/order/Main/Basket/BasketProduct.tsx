import styled from "styled-components";
import { IMAGE_BY_DEFAULT, Product, ProductId, ProductQuantity } from "../../../../../enums/product";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";

export default function BasketProducts() {

    const {
        basket,
        isModeAdmin,
        productSelected,
        titleFieldRef,
        setIsCollapsed,
        setCurrentTabSelected,
        setProductSelected,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    const handleOnDelete = (idOfProduct: ProductId) => {
        handleDeleteBasketProduct(idOfProduct)
    }

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelectBasketProduct = async (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return;
        await setIsCollapsed(false)

        await setCurrentTabSelected("edit")

        const productClickedOn = findObjectById(idOfProductSelected, basket)

        // For TypeScript and `yarn build`, else this error occured "Argument of type 'Product | undefined' is not assignable to parameter of type 'Product'. Type 'undefined' is not assignable to type 'Product'."
        // Check if product was found and set the product
        if (productClickedOn) await setProductSelected(productClickedOn)

        titleFieldRef.current?.focus()
    };

    return (
        <BasketProductsStyled>
            {basket.map(({ id, quantity }) => {
                const basketItemRebuilt: Product = recreateProductFromMenu(id, menu)

                return (
                    <div key={id} className="basket-card">
                        <BasketCard
                            title={title}
                            price={price}
                            quantity={quantity}
                            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                            isSelected={productSelected.id === id && isModeAdmin}
                            isClickable={isModeAdmin}
                            onSelect={() => handleOnSelectBasketProduct(id)}
                            onDelete={() => handleOnDelete(id)}
                        />
                    </div>
                )
            })}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;

        &:first-child {
            margin-top: 20px;
        }

        &:last-child {
            margin-bottom: 20px;
        }

    }
`;
