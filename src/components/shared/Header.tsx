import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type HeaderType = {
    children: ReactNode
}

export default function Header({ children }: HeaderType) {
    return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
    height: 70px;
    background: ${theme.colors.background_dark};
    padding: 0 16px;
`;
