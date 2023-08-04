import { styled } from "styled-components";
import Card from "../../../shared/Card";
import { theme } from "../../../../theme";
import { useEffect, useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

type Item = {
    id: number;
    title: string;
    price: number;
    imageSource: string;
}

export default function Menu() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        // Retrieve data from fakeData > fakeMenu.ts
        setMenu(fakeMenu2);
    }, []);

    return (
        <MenuStyled className="menu">
            {menu.map((item: Item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        price={item.price}
                        pathImg={item.imageSource}
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 60px 0;
    padding: 50px 50px 150px;
    overflow-y: scroll;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
`;
