import styled from "styled-components"
import { theme } from "../../../../../../theme"

type BasketCheckoutMessageProps = {
    message: string
}

export default function BasketCheckoutErrorMessage({message}: BasketCheckoutMessageProps) {
    return (
        <BasketCheckoutErrorMessageStyled>
            <span className="message">{message}</span>
        </BasketCheckoutErrorMessageStyled>
    )
}

const BasketCheckoutErrorMessageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    .icon {
        color: ${theme.colors.red};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        vertical-align: middle;
    }
    .message {
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.red};
    }
`
