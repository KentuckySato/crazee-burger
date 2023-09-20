import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "../../../shared/Header";
import Total from "./Basket/Total";
import { formatPrice } from "../../../../utils/maths";

export default function Basket() {
    return (
        <BasketStyled>
            <Header>
                <Total amountToPay={formatPrice(0)} />
            </Header>

            <div className="basket-body">
                Votre commande est vide.
            </div>

            <Header>
                <div className="basket-footer">
                    Codé avec ❤️ et React.JS
                </div>
            </Header>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 0px 15px;

    /* .basket-header {
        position: sticky;
        top: 0;
        height: 70px;
        background: ${theme.colors.background_dark};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        color: ${theme.colors.white};
        line-height: 1.5;

        .infos {
            display: flex;
            width: 100%;
            padding: 12px 1.87px 13px 0px;
            align-items: flex-start;
            justify-content: space-between;


            color: ${theme.colors.primary};
            font-family: ${theme.fonts.family.stylish};
            font-size: ${theme.fonts.size.P4};
            font-style: normal;
            line-height: normal;
            letter-spacing: 2px;
            font-weight: ${theme.fonts.weights.regular};

            .price {
                font-weight: ${theme.fonts.weights.bold};
            }
        }

    } */

    .basket-body {
        display: flex;
        font-size: ${theme.fonts.size.P4};
        line-height: 72px;
        font-family: ${theme.fonts.family.stylish};
        justify-content: center;
        align-items: center;
        color: #747B91;
        flex: 1;
        background-color: ${theme.colors.background_white};
        box-shadow: ${theme.shadows.basket};
    }

    /* .basket-footer {
        display: flex;
        position: relative;
        bottom: 0;
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.white};

        font-size: ${theme.fonts.size.P2};
        font-weight: ${theme.fonts.weights.bold};
        justify-content: center;
        align-items: center;

        background: ${theme.colors.background_dark};
        height: 70px;
        border-radius: 0px 0px 0px 15px;
    } */
`;
