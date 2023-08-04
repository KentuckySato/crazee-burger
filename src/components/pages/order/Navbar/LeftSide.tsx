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
    max-height: 100%;
    min-width: 200px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
`;
