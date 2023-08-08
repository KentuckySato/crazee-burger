import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled className="panel">
      <div className="panel__content">Ajouter un produit</div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
  border: 1px solid ${theme.colors.greyLight};
  border-radius: 0px 0px ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

`;
