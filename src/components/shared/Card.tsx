import { styled } from "styled-components";
import PrimayButton from "./PrimaryButton";
import { theme } from "../../theme";
import { formatPrice } from "../../utils/maths";

type Props = {
    id: number
    name: string | undefined
    price: number
    pathImg: string
}

export default function Card({name, price, pathImg}: Props) {
    return (
        <CardStyled>
            <div className="card-image">
                <img src={ pathImg } alt={ name } />
            </div>
            <div className="card-text">
                <span className="card-title">{ name }</span>
                <div className="card-description">
                    <span className="left-description">{formatPrice(price)}€</span>
                    <span className="right-description">
                        <PrimayButton type="button" label="Ajouter" className="add-to-basket-button" />
                    </span>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 200px;
    height: 300px;
    display: grid;
    border-radius: ${theme.borderRadius.extraRound};
    padding: 20px 20px 10px;
    background-color: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.2) -8px 8px 20px 0px;
    grid-template-rows: 65% 1fr;
    gap: 0;
    position: relative;

    .card-image {
        margin-top: 30px;
        margin-bottom: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .card-text {
        display: grid;
        grid-template-rows: 30% 70%;
        padding: 0.3em;

        .card-title {
            margin: auto 0px;
            font-size: ${theme.fonts.size.P4};
            position: relative;
            bottom: 10px;
            font-weight: ${theme.fonts.weights.bold};
            color: rgb(23, 22, 26);
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            font-family: "Amatic SC", cursive;
        }

        .card-description {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;

            .left-description {
                display: flex;
                -webkit-box-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                align-items: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: ${theme.fonts.weights.medium};
            }

            .right-description {
                display: flex;
                -webkit-box-pack: end;
                justify-content: flex-end;
                -webkit-box-align: center;
                align-items: center;
                font-size: ${theme.fonts.size.P1};

                .add-to-basket-button {
                    padding: 12px 2em;
                    font-weight: ${theme.fonts.weights.semiBold};
                    font-size: ${theme.fonts.size.XS};
                }
            }
        }
    }

`;

