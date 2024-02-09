import { useContext } from 'react'
import { OrderContext } from '../../../../../context/OrderContext'
import styled from 'styled-components'
import { theme } from '../../../../../theme'
import { BsFillBasket2Fill } from 'react-icons/bs'
import CasinoEffect from '../../../../shared/CasinoEffect'

export default function BasketIcon() {
    const { isBasketOpen, setIsBasketOpen, basket } = useContext(OrderContext)

    const handleShowBasketMobile = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault()
        event.stopPropagation()

        setIsBasketOpen(!isBasketOpen)
    }

    return (
        <BasketIconStyled className="basket" onClick={(event: React.MouseEvent<Element, MouseEvent>) => handleShowBasketMobile(event)}>
            {basket.length > 0 && <div className='badge'>
                <CasinoEffect count={String(basket.length)} className="amount" />
            </div>}
            <BsFillBasket2Fill className={`basket-icon ${isBasketOpen ? "active" : ""}`} />
        </BasketIconStyled>
    )
}

const BasketIconStyled = styled.div`
    height: auto;
    display: flex;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    margin-left: 10px;
    position: relative;

    transition: all 0.3s ease-out;

        &:hover:not(:disabled) {
            color: ${theme.colors.primary};
            transition: all 0.2s ease-out 0s;
            cursor: pointer;

            &:active {
                color: ${theme.colors.greyBlue};
                transition: all 0.2s ease-out 0s;
            }
        }

    .badge {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 17px;
        right: 5.9px;

        min-height: 20px;
        min-width: 20px;
        font-size: ${theme.fonts.size.XS};
        background: ${theme.colors.primary};
        color: ${theme.colors.background_white};
        padding: 2px;
        border-radius: 50%;

        .amount {
            font-weight: ${theme.fonts.weights.bold};
        }
    }

    /* .basket-icon {
        transition: all 0.3s ease-out;

        &:hover:not(:disabled) {
            color: ${theme.colors.primary};
            transition: all 0.2s ease-out 0s;
            cursor: pointer;

            &:active {
                color: ${theme.colors.greyBlue};
                transition: all 0.2s ease-out 0s;
            }
        }
    } */
`
