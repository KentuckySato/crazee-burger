import styled from "styled-components";
import { theme } from "../../../../../theme";
import { IMAGE_BY_DEFAULT, Product } from "../../../../../enums/product";
import BasketCard from "./BasketCard";

type BasketProductsType = {
    basket: Product[];
}

export default function BasketProducts({ basket }: BasketProductsType) {
    return (
        <BasketProductsStyled>
            {basket.map(({ id, title, price, imageSource }) => (
                <div key={id} className="basket-card">
                    <BasketCard
                        title={title}
                        price={price}
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT} />
                </div>
            ))}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;

        &:first-child {
            margin-top: 20px;
        }

        &:last-child {
            margin-bottom: 20px;
        }

    }
`;
