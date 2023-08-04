import { styled } from "styled-components";

export default function Menu() {
    return (
        <MenuStyled className="menu">
            <ul>
                <li>Items 1</li>
                <li>Items 2</li>
                <li>Items 3</li>
                <li>Items 4</li>
                <li>Items 5</li>
            </ul>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
