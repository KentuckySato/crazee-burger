import { styled } from "styled-components";
import Card from "../../../../../shared/Card";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { formatPrice } from "../../../../../../utils/maths";
import { OrderContext } from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT, IMAGE_OUT_OF_STOCK, ProductId } from "../../../../../../enums/product";
import { isEmpty } from "../../../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../../utils/string";

export default function Menu() {
    const {
        username,
        isModeAdmin,
        menu,
        handleDeleteMenuProduct,
        resetMenu,
        productSelected,
        setProductSelected,
        handleProductSelected,
        titleFieldRef,
        handleAddBasketProduct,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelect = (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return;
        handleProductSelected(idOfProductSelected)
    };

    const handleCardDelete = (event: React.MouseEvent<Element, MouseEvent>, idProductToDelete: ProductId) => {
        event.stopPropagation()

        handleDeleteMenuProduct(idProductToDelete, username)
        handleDeleteBasketProduct(idProductToDelete, username)

        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)

        titleFieldRef.current?.focus()
    }

    const handleAddButton = (event: React.MouseEvent<Element, MouseEvent>, idProductToAdd: ProductId) => {
        event.stopPropagation()
        handleAddBasketProduct(idProductToAdd, username)
    }

    // Render
    if (menu === undefined) return <Loader />

    if (isEmpty(menu)) {
        if (!isModeAdmin) return <EmptyMenuClient />
        return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    }

    return (
        <MenuStyled className="menu">
            <TransitionGroup component={null} >
                {
                    menu.map(({ id, title, price, imageSource, isAvailable }) =>
                        <CSSTransition key={id} classNames={"menu-animation"} timeout={300}>
                            <Card
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
                                overlapImageSource={IMAGE_OUT_OF_STOCK}
                                isOverlapImageVisible={!convertStringToBoolean(isAvailable)}
                            />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
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

    ${menuAnimation}
`