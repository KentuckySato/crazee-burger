import { styled } from "styled-components";
import Card from "../../../../shared/Card";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { formatPrice } from "../../../../../utils/maths";
import { OrderContext } from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { ProductId } from "../../../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

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
        setIsCollapsed
    } = useContext(OrderContext);

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelect = async (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return;

        await setIsCollapsed(false)

        await setCurrentTabSelected("edit");

        const productClickedOn = menu.find((product) => product.id === idOfProductSelected);

        // For TypeScript and `yarn build`, else this error occured "Argument of type 'Product | undefined' is not assignable to parameter of type 'Product'. Type 'undefined' is not assignable to type 'Product'."
        // Check if product was found and set the product
        if (productClickedOn) await setProductSelected(productClickedOn);

        titleFieldRef.current?.focus();
    };

    const handleCardDelete = (event: React.MouseEvent<Element, MouseEvent>, idProductToDelete: ProductId) => {
        event.stopPropagation();

        handleDeleteProduct(idProductToDelete);

        // useCase => we select Card A and delete Card B via close button. Then, the EditForm with all informations of Card A MUST be visible and intact.
        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)

        titleFieldRef.current?.focus();
    }

    // Render
    return (
        <MenuStyled className="menu">
            {menu.length > 0 ? (
                menu.map(({ id, title, price, imageSource }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                            leftDescription={formatPrice(price)}
                            isHoverable={isModeAdmin}
                            isSelected={productSelected.id === id && isModeAdmin}
                            deleteCard={isModeAdmin}
                            onDelete={(event) => handleCardDelete(event, id)}
                            onSelect={() => handleOnSelect(id)}
                            onAdd={(event) => event.stopPropagation()}
                        />
                    );
                })
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
    overflow: auto;
`;

const MessageEmptyStyled = styled.div``;
