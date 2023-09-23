import styled from "styled-components";
import { theme } from "../../../../../theme";
import { Product } from "../../../../../enums/product";
import BasketCard from "./BasketCard";

type BasketProductsType = {
    basket: Product[];
}

export default function BasketProducts({ basket }: BasketProductsType) {
    return (
        <BasketProductsStyled>
            {basket.map((product: Product) => (
                <div key={product.id} className="basket-card">
                    <BasketCard {...product} />
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
