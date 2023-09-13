import { styled } from "styled-components";
import Card from "../../../../shared/Card";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import { formatPrice } from "../../../../../utils/maths";
import { OrderContext } from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { ProductId } from "../../../../../fakeData/fakeMenu";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
    const {
        isModeAdmin,
        menu,
        handleDeleteProduct,
        resetMenu,
        productSelected,
        selectCard,
        setCurrentTabSelected,
        titleFieldRef,
    } = useContext(OrderContext);

    const handleOnSelect = async (id: ProductId) => {
        if (isModeAdmin === false) return;

        await setCurrentTabSelected("edit");

        await selectCard(id);

        titleFieldRef.current?.focus();
    };

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
                            onDelete={(e) => {
                                e.stopPropagation();
                                handleDeleteProduct(id);
                            }}
                            onSelect={() => handleOnSelect(id)}
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
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: #0003 0px 8px 20px 8px inset;
    overflow: auto;
`;

const MessageEmptyStyled = styled.div``;
