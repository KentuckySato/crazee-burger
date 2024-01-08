import { styled } from "styled-components"
import Logo from "../../../shared/Logo"
import { refreshPage } from "../../../../utils/window"
import { GiHamburgerMenu } from "react-icons/gi"
import { useMobile } from "../../../../hooks/useMobile"
import { useState } from "react"
import { theme } from "../../../../theme"

export default function NavbarLeftSide() {
    const { isMobile } = useMobile()
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbarMobile = () => setShowNavbar(!showNavbar)

    return (
        <NavbarLeftSideStyled>
            {isMobile && <GiHamburgerMenu className="icon-burger" onClick={handleShowNavbarMobile} />}
            <Logo className="logo-order-page" onClick={refreshPage} />
        </NavbarLeftSideStyled>
    )
}

const NavbarLeftSideStyled = styled.div`
    display: flex;
    align-items: center;

    .logo-order-page {
        cursor: pointer;
    }

    .icon-burger {
        display: block;
        font-size: 1.5rem;
        color: ${theme.colors.greyBlue};

        &:hover:not(:disabled) {
            color: ${theme.colors.primary};
            transition: all 0.2s ease-out 0s;
            cursor: pointer;

            &:active {
                color: ${theme.colors.greyBlue};
                transition: all 0.2s ease-out 0s;
            }
        }
    }
`
