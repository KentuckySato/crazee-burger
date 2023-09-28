import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

type HeaderProps = {
    children: ReactNode
}

export default function BasketHeader({ children }: HeaderProps) {
    return <BasketHeaderStyled>{children}</BasketHeaderStyled>
}

const BasketHeaderStyled = styled.div`
    height: 70px;
    background: ${theme.colors.background_dark};
    padding: 0 16px;
`;
