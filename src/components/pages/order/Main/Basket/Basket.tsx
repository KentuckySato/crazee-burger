import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "../../../../shared/Footer";
import BasketBody from "./BasketBody";

export default function Basket() {
    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(0)} />
            <BasketBody />
            <Footer>
                <span>Codé avec ❤️ et React.JS</span>
            </Footer>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
`;
