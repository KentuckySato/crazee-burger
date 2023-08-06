import { styled } from "styled-components"
import Profile from "./Profile"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';
import { theme } from "../../../../theme"
import { useState } from "react"
import ToggleButton from "../../../shared/ToggleButton";

type Props = {
  username: string | undefined
}

export default function NavbarRightSide({ username }: Props) {

  const [admin, setAdmin] = useState(false);

  const handleAdmin = () => {

    if (!admin) {
      setAdmin(true);

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
    } else {
      setAdmin(false);
    }
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={admin}
        onToggle={handleAdmin}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin" />
      <Profile username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
