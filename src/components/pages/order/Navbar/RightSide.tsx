import { styled } from "styled-components"
import { theme } from "../../../../theme"
import Profile from "./Profile"

type Props = {
  username: string | undefined
}

export default function RightSide({ username }: Props) {
  return (
    <RightSideStyled>
      <Profile username={username} />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  background-color: ${theme.colors.green};
`;
