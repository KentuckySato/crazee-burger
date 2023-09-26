import styled from "styled-components";
import { IMAGE_BY_DEFAULT, Product, ProductId } from "../../../../../enums/product";
import BasketCard from "./BasketCard";

type BasketProductsType = {
    basket: Product[];
    handleDeleteProductBasket: (id: ProductId) => void;
}

export default function BasketProducts({ basket, handleDeleteProductBasket }: BasketProductsType) {

    const handleOnDelete = (idOfProduct: ProductId) => {
        handleDeleteProductBasket(idOfProduct)
    }

    return (
        <BasketProductsStyled>
            {basket.map(({ id, title, price, imageSource, quantity }) => (
                <div key={id} className="basket-card">
                    <BasketCard
                        title={title}
                        price={price}
                        quantity={quantity}
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                        onDelete={() => handleOnDelete(id)}
                    />
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
