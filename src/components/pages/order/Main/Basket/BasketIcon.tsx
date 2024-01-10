import { useContext } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { OrderContext } from '../../../../../context/OrderContext'
import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function BasketIcon() {
    const { isBasketOpen, setIsBasketOpen } = useContext(OrderContext)

    const handleShowBasketMobile = () => setIsBasketOpen(!isBasketOpen)
    return (
        <BasketIconStyled className="basket">
            <FaShoppingBasket className={`basket-icon ${isBasketOpen ? "active" : ""}`} onClick={handleShowBasketMobile} />
        </BasketIconStyled>
    )
}

const BasketIconStyled = styled.div`
    height: auto;
    display: flex;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    margin-left: 10px;

    .basket-icon {
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
    }
`
