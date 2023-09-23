import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyBasket from "./EmptyBasket";
import { Product } from "../../../../../enums/product";

type BasketBodyType = {
    basket: Product[];
}

export default function BasketBody({ basket }: BasketBodyType) {
    return (
        <BasketBodyStyled>
            {
                !basket ? <EmptyBasket /> :
                    basket.map((product: Product) => {
                        return <div key={product.id}>{product.title}</div>
                    })
            }
        </BasketBodyStyled>
    )
}

const BasketBodyStyled = styled.div`
    flex: 1;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
`;
