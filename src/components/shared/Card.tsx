import styled, { css } from "styled-components"
import Button from "./Button";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import { MouseEventHandler } from "react";

type CardProps = {
    id: number | string
    title: string | undefined
    imageSource: string
    leftDescription: string
    hasDeleteButton?: boolean
    isSelected: boolean
    isHoverable: boolean
    onDelete: MouseEventHandler
    onSelect: MouseEventHandler
    onAdd: MouseEventHandler
}

export default function Card({
    title,
    imageSource,
    leftDescription,
    isHoverable,
    hasDeleteButton,
    isSelected = false,
    onDelete,
    onSelect,
    onAdd,
}: CardProps) {


    return (
        <CardStyled
            $isSelected={isSelected}
            $isHoverable={isHoverable}
            onClick={onSelect}
        >
            <div className="card">
                {
                    hasDeleteButton &&
                    <button className="card-delete" aria-label="delete-button" onClick={onDelete}>
                        <TiDelete className="icon" />
                    </button>
                }
                <div className="card-image">
                    <img src={imageSource} alt={title} />
                </div>
                <div className="card-text">
                    <span className="card-title">{title}</span>
                    <div className="card-description">
                        <span className="left-description">{leftDescription}</span>
                        <span className="right-description">
                            <Button type="button" label="Ajouter" className="add-to-basket-button" onClick={onAdd} />
                        </span>
                    </div>
                </div>
            </div>
        </CardStyled>

    )
}

const CardStyled = styled.div<{ $isSelected: boolean, $isHoverable: boolean }>`

    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    border-radius: ${theme.borderRadius.extraRound};
    height: 330px;

    .card {
        box-sizing: border-box;
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        border-radius: ${theme.borderRadius.extraRound};
        padding: 20px 20px 10px;
        background: ${theme.colors.white};
        box-shadow: rgba(0, 0, 0, 0.2) -8px 8px 20px 0px;
        gap: 0;
        position: relative;

        .card-delete {
            border: 1px solid red;
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            color: ${theme.colors.primary};
            padding: 0;
            border: none;
            background: none;

            .icon {
                height: 100%;
                width: 100%;
            }

            &:hover {
                color: ${theme.colors.red};
            }

            &:active {
                color: ${theme.colors.primary};
            }

        }

        .card-image {
            width: 100%;
            height: auto;
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
                    color: ${theme.colors.primary};
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
                        cursor: pointer;
                    }
                }
            }
        }

        ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}

    }

`;

const hoverableStyle = css`
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: ${theme.shadows.orangeHighlight};
        transition: ease-in-out 0.4s;
    }
`

const selectedStyle = css`
  background: ${theme.colors.primary};
  .add-to-basket-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white} !important;
      color: ${theme.colors.primary} !important;
    }
  }

  .card-delete {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }

  .card-text {
    .card-description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`