import { styled } from "styled-components";
import PrimayButton from "./PrimaryButton";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

type CardProps = {
    title: string | undefined
    imageSource: string
    leftDescription: string
    deleteCard?: (id: number) => void
}

export default function Card({ title, imageSource, leftDescription, deleteCard }: CardProps) {

    const { isModeAdmin } = useContext(OrderContext);

    return (
        <ProductStyled>
            {isModeAdmin && deleteCard && <div className="card-close" onClick={deleteCard}><TiDelete /></div>}
            <div className="card-image">
                <img src={ imageSource } alt={ title } />
            </div>
            <div className="card-text">
                <span className="card-title">{ title }</span>
                <div className="card-description">
                    <span className="left-description">{leftDescription}</span>
                    <span className="right-description">
                        <PrimayButton type="button" label="Ajouter" className="add-to-basket-button" />
                    </span>
                </div>
            </div>
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    border-radius: ${theme.borderRadius.extraRound};
    padding: 20px 20px 10px;
    background-color: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.2) -8px 8px 20px 0px;
    gap: 0;
    position: relative;

    .card-close {
        position: absolute;
        right: 15px;
        top: 15px;

        &:hover {
            cursor: pointer;
        }

        svg {
            &:hover {
                color: ${theme.colors.red};
            }
            color: ${theme.colors.primary};
            width: 30px;
            height: 30px;
        }
    }

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

