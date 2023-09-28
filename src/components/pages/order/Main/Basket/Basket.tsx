import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import { OrderContext } from "../../../../../context/OrderContext";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { isEmpty } from "../../../../../utils/array";
import { calculcateSumToPay } from "./basketHelper";

export default function Basket() {

    const {
        basket,
        isModeAdmin,
        productSelected,
        titleFieldRef,
        setIsCollapsed,
        setCurrentTabSelected,
        setProductSelected,
        handleDeleteProductBasket
    } = useContext(OrderContext)

    const isBasketEmpty = isEmpty(basket)

    const totalAmount = calculcateSumToPay(basket)

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
`;
