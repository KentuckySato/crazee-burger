import styled from "styled-components"
import Total from "./BasketHeader/Total"
import { theme } from "../../../../../theme"
import BasketFooter from "./BasketFooter"
import BasketBody from "./BasketBody/BasketBody"

export default function Basket() {
    return (
        <BasketStyled className="basket">
            <Total />
            <BasketBody />
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

    @media(max-width: 768px) {
        height: 100%;
        border-radius: 0;

        .header-footer {
            padding: 10px 20px;
            border-bottom-left-radius: 0;
        }
    }
`
