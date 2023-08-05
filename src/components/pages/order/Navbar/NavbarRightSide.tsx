import { styled } from "styled-components"
import Profile from "./Profile"
import { toast } from "react-toastify"
import { theme } from "../../../../theme"
import { useState } from "react"

type Props = {
  username: string | undefined
}

export default function NavbarRightSide({ username }: Props) {

  const [admin, setAdmin] = useState(false);

  const handleAdmin = () => {
    toast("Mode admin activé");
    setAdmin(!admin);
   }

  return (
    <NavbarRightSideStyled>
      <div className="admin-button">
        <input id="admin" className="toggle" type="checkbox" onChange={handleAdmin}  />
        <label htmlFor="admin" className="rounded">{admin ? "Désactiver le mode admin" : "Activer le mode admin"}</label>
      </div>
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  padding-right: 50px;
  display: flex;
  align-items: center;


  .admin-button {
    display: flex;
    margin-right: 10px;
    label {
      font-size: ${theme.fonts.size.XXS};
      line-height: normal;
      letter-spacing: 0.5px;
      text-align: center;

      font-family: Open Sans;
      font-weight: ${theme.fonts.weights.bold};
      padding: 5px 10px 5px 5px;
      gap: 5px;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.primary};
      border-radius: 15px;
      border: none;

      &:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        background: #FFA01B;
        width: 30px;
        height: 30px;
      }
    }

    input[type="checkbox"].toggle {
      display: none;
    }

    input[type="checkbox"].toggle:not(:checked) + label {
      background-color: ${theme.colors.background_dark};
    }

    input[type="checkbox"].toggle + label.rounded {
      border-radius: 30px;
    }
  }
`;
