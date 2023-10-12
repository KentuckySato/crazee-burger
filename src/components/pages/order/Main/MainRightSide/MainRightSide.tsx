import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu/Menu"
import { OrderContext } from "../../../../../context/OrderContext"

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && <Admin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
