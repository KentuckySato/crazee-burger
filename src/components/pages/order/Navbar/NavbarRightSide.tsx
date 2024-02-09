import { useContext } from "react"
import { toast } from "react-toastify"
import { OrderContext } from "../../../../context/OrderContext"
import Profile from "./Profile"
import ToggleButton from "../../../shared/ToggleButton"
import ToastAdmin from "./ToastAdmin"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import { useMobile } from "../../../../hooks/useMobile"

export default function NavbarRightSide() {

    const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

    const { isMobile } = useMobile()

    const displayToastNotification = () => {

        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin)
    }

    const handleMessageToggle = () => {
        let labelIfUnchecked = "Activer le mode admin"
        let labelIfChecked = "Désactiver le mode admin"
        if (isMobile) {
            labelIfUnchecked = "Admin"
            labelIfChecked = "Client"
        }

        return { labelIfUnchecked, labelIfChecked }
    }

    const { labelIfUnchecked, labelIfChecked } = handleMessageToggle()

    return (
        <NavbarRightSideStyled>
            <ToggleButton
                isChecked={isModeAdmin}
                onToggle={displayToastNotification}
                labelIfUnchecked={labelIfUnchecked}
                labelIfChecked={labelIfChecked} />
            <Profile />
            <ToastAdmin />
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    width: auto;
    position: relative;
    min-width: 380px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        min-width: 0px;

        .nav-elements {
            position: absolute;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            width: 0px;
            height: 0;
            right: -20px;
            top: 59px;
            background-color: ${theme.colors.white};
            transition: all 0.3s ease-out;
            overflow: hidden;
            z-index: 3;
            border-bottom-left-radius: ${theme.borderRadius.extraRound};
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
        }

        .nav-elements.active {
            width: 300px;
            height: 20vh;
        }

    }
`