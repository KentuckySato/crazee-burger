import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
    return (
        <BasketStyled className="basket">
            <div className="basket-header">
                <div className="infos">
                    <span className="title">Total</span>
                    <span className="price">0,00 €</span>
                </div>
            </div>
            <div className="basket-body">
                Votre commande est vide.
            </div>
            <div className="basket-footer">
                Codé avec ❤️ et React.js
            </div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
justify-content: space-between;
    .basket-header {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        line-height: 1.5;
        height: 70px;
        width: auto;
        padding: 0 16px;
        background: ${theme.colors.background_dark};
        box-sizing: border-box;

        .infos {
            display: flex;
            width: 100%;
            padding: 12px 1.87px 13px 0px;
            align-items: flex-start;
            justify-content: space-between;


            color: ${theme.colors.primary};
            font-family: ${theme.fonts.family.stylish};
            font-size: 36px;
            font-style: normal;
            line-height: normal;
            letter-spacing: 2px;
            font-weight: 400;

            .price {
                font-weight: 700;
            }
        }

    }

    .basket-body {
        display: flex;
        font-size: ${theme.fonts.size.P4};
        line-height: 72px;
        font-family: ${theme.fonts.family.stylish};
        justify-content: center;
        color: #747B91;

    }

    .basket-footer {
        display: flex;
        position:relataive;
        bottom: 0;
        font-family: Amatic SC;
        color: #FFF;

        font-size: ${theme.fonts.size.P2};
        font-weight: 700;
        justify-content: center;
        align-items: center;

        background: ${theme.colors.background_dark};
        height: 70px;
        border-radius: 0px 0px 0px 15px;
    }
`;
