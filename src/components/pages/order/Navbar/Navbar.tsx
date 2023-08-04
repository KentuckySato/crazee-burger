import { styled } from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { theme } from "../../../../theme";

type Props = {
    username: string | undefined
}

export default function Navbar({username}: Props) {
    return (
        <NavbarStyled className="navbar">
            <LeftSide />
            <RightSide username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
  background-color: ${theme.colors.blue};
`;
