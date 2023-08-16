import { styled } from "styled-components";
import Card from "../../../shared/Card";
import { theme } from "../../../../theme";
import { useContext } from "react";
import { formatPrice } from "../../../../utils/maths";
import { OrderContext } from "../../../../context/OrderContext";
import PrimayButton from "../../../shared/PrimaryButton";

export default function Menu() {

    const { isModeAdmin, menu } = useContext(OrderContext);

    return (
        <MenuStyled className="menu">
            {
                menu.length > 0
                    ? menu.map(({ id, title, price, imageSource }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                imageSource={imageSource}
                                leftDescription={formatPrice(price)}
                                deleteCard={true}
                            />
                        )
                    })
                    :
                    <MessageEmptyStyled>
                        {
                            isModeAdmin ?
                                <>
                                    <h2>Le menu est vide ?</h2>
                                    <h2>Cliquez ci-dessous pour le réinitialiser</h2>
                                    <PrimayButton label="Générer de nouveaux produits" type="button" onClick={() => console.log("click")} />
                                </>
                                :
                                <>
                                    <h2>Victime de notre succès ! :D</h2>
                                    <h2>De nouvelles recettes sont en cours de préparation.</h2>
                                    <h2>À très vite !</h2>
                                </>
                        }
                    </MessageEmptyStyled>
            }
        </MenuStyled>
    )
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

const MessageEmptyStyled = styled.div`
    background-color: rgb(245, 245, 247);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px 8px inset;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    inset: 0px;

    font-family: "Amatic SC", cursive;
    color: rgb(116, 123, 145);

    h2 {
        text-align: center;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        align-self: center;
        line-height: 0.5;
        font-family: "Amatic SC", cursive;
        color: rgb(116, 123, 145);
        font-size: 36px;
    }

    button {
        margin-top: 30px;
    }
`
