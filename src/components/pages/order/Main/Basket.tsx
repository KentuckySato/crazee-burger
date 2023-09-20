import styled from "styled-components";
import { theme } from "../../../../theme";
import Total from "./Basket/Total";
import { formatPrice } from "../../../../utils/maths";
import Footer from "../../../shared/Footer";

export default function Basket() {
    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(0)} />

            <div className="basket-body">
                Votre commande est vide.
            </div>

            <Footer>
                <span>Codé avec ❤️ et React.JS</span>
            </Footer>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;

    .basket-body {
        display: flex;
        font-size: ${theme.fonts.size.P4};
        line-height: 2;
        font-family: ${theme.fonts.family.stylish};
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #747B91;
        flex: 1;
        background-color: ${theme.colors.background_white};
        box-shadow: ${theme.shadows.basket};
    }
`;
