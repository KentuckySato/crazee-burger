import { styled } from "styled-components"
import { theme } from "../../../../theme"
import Profile from "./Profile"

type Props = {
  username: string | undefined
}

export default function NavbarRightSide({ username }: Props) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  width: auto;
  min-width: 380px;
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
  -webkit-box-pack: justify;
  /* justify-content: space-between; */
  justify-content: end;
  -webkit-box-align: center;
  align-items: center;
`;
