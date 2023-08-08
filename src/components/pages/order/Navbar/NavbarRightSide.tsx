import { styled } from "styled-components"
import Profile from "./Profile"
import { toast } from "react-toastify"
import { useContext } from "react"
import ToggleButton from "../../../shared/ToggleButton";
import ToastAdmin from "./ToastAdmin"
import { OrderContext } from "../../../../context/OrderContext";

type Props = {
  username: string | undefined
}

export default function NavbarRightSide({ username }: Props) {

  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

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
    setIsModeAdmin(!isModeAdmin);
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={displayToastNotification}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin" />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  width: auto;
  min-width: 380px;
  padding: 10px 20px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
