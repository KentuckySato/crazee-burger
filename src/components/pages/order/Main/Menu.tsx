import { styled } from "styled-components";
import Card from "../../../shared/Card";
import { theme } from "../../../../theme";

export default function Menu() {
    return (
        <MenuStyled className="menu">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background-color: ${theme.colors.background_white};
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 60px 0;
    padding: 50px 50px 150px;
    overflow-y: scroll;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
`;
