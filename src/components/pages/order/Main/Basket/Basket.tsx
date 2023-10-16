import styled from "styled-components";
import Total from "./Total";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";

export default function Basket() {
    return (
        <BasketStyled>
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
`;
