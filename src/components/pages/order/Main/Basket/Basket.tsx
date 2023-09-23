import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "../../../../shared/Footer";
import { OrderContext } from "../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProduct";

export default function Basket() {

    const { basket } = useContext(OrderContext)

    const isBasketEmpty = basket.length === 0

    const totalAmount = basket.reduce((acc, product) => acc + product.price, 0);

    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(totalAmount)} />
            {
                isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />
            }
            <Footer><span>Codé avec ❤️ et React.JS</span></Footer>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
`;
