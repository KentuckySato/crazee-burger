import { styled } from "styled-components"
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
  padding-right: 50px;
  display: flex;
  align-items: center;
`;
