import { styled } from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { theme } from "../../../../theme";

type Props = {
    username: string | undefined
}

export default function Navbar({ username }: Props) {
    return (
        <NavbarStyled className="navbar">
            <LeftSide />
            <RightSide username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    color: rgb(23, 22, 26);
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 10vh;
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(228, 229, 233);
`;
