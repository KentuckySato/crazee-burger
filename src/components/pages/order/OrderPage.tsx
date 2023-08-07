import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import { AdminContext } from "../../../context/AdminContext";
import { useState } from "react";

export default function OrderPage() {
  const { username } = useParams();

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isAddFormVisible, setIsAddFormVisible] = useState(true);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [allFormsInvisible, setAllFormsInvisible] = useState(false);

  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isAddFormVisible,
    setIsAddFormVisible,
    isEditFormVisible,
    setIsEditFormVisible,
    allFormsInvisible,
    setAllFormsInvisible
  };

  return (
    <OrderPageStyled>
      <AdminContext.Provider value={adminContextValue}>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </AdminContext.Provider>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
    background-color: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      position: relative;
      border-radius: ${theme.borderRadius.extraRound};
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 1400px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
    }
`;
