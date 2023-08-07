import { styled } from "styled-components";
import Card from "../../../shared/Card";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {

    const [menu] = useState(fakeMenu2);

    return (
        <MenuStyled className="menu">
            {menu.map(({id, title, price, imageSource}) => {
                return (
                    <Card
                        key={id}
                        title={title}
                        imageSource={imageSource}
                        leftDescription={formatPrice(price)}
                    />
                )
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    background-color: ${theme.colors.background_white};
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
    overflow: auto;
`;
