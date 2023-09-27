import styled from "styled-components";
import Total from "./Total";
import { formatPrice, replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { OrderContext } from "../../../../../context/OrderContext";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {

    const { basket, isModeAdmin, productSelected, titleFieldRef, setIsCollapsed, setCurrentTabSelected, setProductSelected, handleDeleteProductBasket } = useContext(OrderContext)

    const isBasketEmpty = isEmpty(basket)

    const totalAmount = basket.reduce((total, product) => {
        return total + replaceFrenchCommaWithDot(product.price) * product.quantity
    }, 0);

    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(totalAmount)} />
            <BasketBody
                isBasketEmpty={isBasketEmpty}
                basket={basket}
                isModeAdmin={isModeAdmin}
                productSelected={productSelected}
                titleFieldRef={titleFieldRef}
                setIsCollapsed={setIsCollapsed}
                setCurrentTabSelected={setCurrentTabSelected}
                setProductSelected={setProductSelected}
                handleDeleteProductBasket={handleDeleteProductBasket}
            />
            <BasketFooter />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;

    .head {
        position: sticky;
        top: 0;
    }

    .footer {
        border-bottom-left-radius: 15px;
        position: sticky;
        bottom: 0;
    }

`;
