import { styled } from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";
import { theme } from "../../../../theme";

type Props = {
    username: string | undefined
}

export default function Navbar({ username }: Props) {
    return (
        <NavbarStyled>
            <NavbarLeftSide />
            <NavbarRightSide username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    color: rgb(23, 22, 26);
    background-color: ${theme.colors.white};
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 10vh;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(228, 229, 233);
`;
