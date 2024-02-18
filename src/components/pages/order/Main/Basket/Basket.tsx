import styled from "styled-components"
import Total from "./BasketHeader/Total"
import BasketFooter from "./BasketFooter"
import BasketBody from "./BasketBody/BasketBody"
import { useContext, useState } from "react"
import { theme } from "../../../../../theme"
import { OrderContext } from "../../../../../context/OrderContext"

import BasketCheckout from "./BasketCheckout/BasketCheckout"
import Modal from "../../../../shared/Modal"
import ButtonCheckout from "./BasketCheckout/ButtonCheckout"

export default function Basket() {

    const { isBasketOpen } = useContext(OrderContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModalCheckout = () => {
        setIsModalOpen(true)
    }

    return (
        <BasketStyled className="basket">
            <div className={`basket-elements ${isBasketOpen ? "active" : ""}`}>
                <Total />
                <BasketBody />

                <ButtonCheckout onClick={handleOpenModalCheckout} />
                { isModalOpen && <Modal content={<BasketCheckout />} setIsModalOpen={setIsModalOpen} />}

                <BasketFooter />
            </div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;

    .basket-icon {
        display: none;
    }

    .header-footer {
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }

    .basket-elements {
        overflow: auto;
        height: 85vh;
        display: flex;
        flex-direction: column;
    }

    button.checkout {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        height: 40px;
        width: 70%;
        margin: 20px auto;

        letter-spacing: 2px;

        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        font-weight: ${theme.fonts.weights.bold};
    }

    @media(max-width: 768px) {
        height: 100%;
        border-radius: 0;
        display: flex;
        position: absolute;
        overflow-y: hidden;

        .basket-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            /* left: 5%; */
            right: 0;
            transform: translate(-50%,-50%);
            border: 3px solid ${theme.colors.greyDark};

            z-index: 3;
            height: 30px;
            width: 30px;
            color: ${theme.colors.greyBlue};
            background: ${theme.colors.white};
            padding: 5px;
            border-radius: 50%;

            transition: all 0.3s ease-out;

            &:hover:not(:disabled) {
                color: ${theme.colors.primary};
                border: 3px solid ${theme.colors.primary};
                transition: all 0.2s ease-out 0s;
                cursor: pointer;

                &:active {
                    color: ${theme.colors.greyBlue};
                    transition: all 0.2s ease-out 0s;
                }
            }
        }

        .basket-elements {
            position: relative;
            left: -100%;
            background-color: ${theme.colors.white};
            transition: all 0.3s ease-out;
            z-index: 3;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
            height: 100dvh;

        }
        .basket-elements.active {
            left: 0%;
        }

        .header-footer {
            padding: 10px 20px;
            border-bottom-left-radius: 0;
        }
    }
`
