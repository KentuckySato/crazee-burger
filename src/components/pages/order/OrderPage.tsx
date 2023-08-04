import { useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="body">
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
    background-color: ${theme.colors.primary};
    .body {
      /* background-image: url(/images/pattern-burger.png); */
      background-size: 200px 150px;
      background-color: transparent;
      background-repeat: repeat;
      height: 100vh;
      display: flex;
    }

    .container {
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 1400px;
      margin: auto;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
    }
`;
