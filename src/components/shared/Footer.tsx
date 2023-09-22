import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type FooterType = {
    children: ReactNode
}

export default function Footer({ children }: FooterType) {
    return (
        <FooterStyled>
            {children}
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 70px;
    padding: 0 16px;
    color: ${theme.colors.white};
    background: ${theme.colors.background_dark};

    font-family: Amatic SC;
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};

    border-radius: 0 0 0 ${theme.borderRadius.extraRound};
`;
