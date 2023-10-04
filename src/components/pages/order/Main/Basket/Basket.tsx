import styled from "styled-components";
import Total from "./Total";
import { OrderContext } from "../../../../../context/OrderContext";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
    const { basket } = useContext(OrderContext)

    return (
        <BasketStyled>
            <Total />
            <BasketBody isBasketEmpty={isEmpty(basket)} />
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

    .header-footer {
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }
`;
