import { styled } from "styled-components";
import Card from "../../../../shared/Card";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { formatPrice } from "../../../../../utils/maths";
import { OrderContext } from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT, ProductId } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/array";

export default function Menu() {
    const {
        isModeAdmin,
        menu,
        handleDeleteProduct,
        resetMenu,
        productSelected,
        setProductSelected,
        setCurrentTabSelected,
        titleFieldRef,
        setIsCollapsed,
        handleAddProductToBasket,
        handleDeleteProductBasket
    } = useContext(OrderContext)

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelect = async (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return;
        await setIsCollapsed(false)

        await setCurrentTabSelected("edit")

        const productClickedOn = findObjectById(idOfProductSelected, menu)

        // For TypeScript and `yarn build`, else this error occured "Argument of type 'Product | undefined' is not assignable to parameter of type 'Product'. Type 'undefined' is not assignable to type 'Product'."
        // Check if product was found and set the product
        if (productClickedOn) await setProductSelected(productClickedOn)

        titleFieldRef.current?.focus()
    };

    const handleCardDelete = (event: React.MouseEvent<Element, MouseEvent>, idProductToDelete: ProductId) => {
        event.stopPropagation()

        handleDeleteProduct(idProductToDelete)
        handleDeleteProductBasket(idProductToDelete)

        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)

        titleFieldRef.current?.focus()
    }

    const handleAddButton = (event: React.MouseEvent<Element, MouseEvent>, idProductToAdd: ProductId) => {
        event.stopPropagation()
        const productToAdd = findObjectById(idProductToAdd, menu)
        if (productToAdd) handleAddProductToBasket(productToAdd)
    }

    // Render
    return (
        <MenuStyled className="menu">
            {menu.length > 0 ? (
                menu.map(({ id, title, price, imageSource }) =>
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                        leftDescription={formatPrice(price)}
                        isHoverable={isModeAdmin}
                        isSelected={productSelected.id === id && isModeAdmin}
                        hasDeleteButton={isModeAdmin}
                        onDelete={(event) => handleCardDelete(event, id)}
                        onSelect={() => handleOnSelect(id)}
                        onAdd={(event) => handleAddButton(event, id)}
                    />
                )
            ) : (
                <MessageEmptyStyled>
                    {isModeAdmin ? (
                        <EmptyMenuAdmin onReset={resetMenu} />
                    ) : (
                        <EmptyMenuClient />
                    )}
                </MessageEmptyStyled>
            )}
        </MenuStyled>
    );
}

const MenuStyled = styled.div`
    background-color: ${theme.colors.background_white};
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
    overflow: auto;
`;

const MessageEmptyStyled = styled.div``;
