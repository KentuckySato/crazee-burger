import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyBasket from "./EmptyBasket";
import { Product } from "../../../../../enums/product";
import BasketCard from "./BasketCard";

type BasketProductsType = {
    basket: Product[];
}

export default function BasketProducts({ basket }: BasketProductsType) {
    return (
        <BasketProductsStyled>
            {
                !basket ? <EmptyBasket /> :
                    basket.map((product: Product) => {
                        return <BasketCard key={product.id} title={product.title} imageSource={product.imageSource} />
                    })
            }
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
`;
