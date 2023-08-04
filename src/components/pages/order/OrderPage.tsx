import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled className="container">
      <Navbar username={username} />
      <Main />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 1400px;
    margin-top: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;

`;
