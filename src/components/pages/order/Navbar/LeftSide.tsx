import { styled } from "styled-components";
import Logo from "../../../shared/Logo";
import { theme } from "../../../../theme";

export default function LeftSide() {
    return (
        <LeftSideStyled>
            <Logo />
        </LeftSideStyled>
    )
}

const LeftSideStyled = styled.div`
  background-color: ${theme.colors.green};
`;
