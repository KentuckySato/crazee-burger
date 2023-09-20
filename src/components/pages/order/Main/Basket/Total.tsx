import styled from "styled-components";
import { theme } from "../../../../../theme";

type TotalType = {
    amountToPay: string
}

export default function Total({ amountToPay }: TotalType) {
    return (
        <TotalStyled>
            <span className="total">Total</span>
            <span className="amount">{amountToPay}</span>
        </TotalStyled>
    )
}

const TotalStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    letter-spacing: 2px;

    .amount {
        font-weight: ${theme.fonts.weights.bold};
    }
`;

