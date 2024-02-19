import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js'
import { useContext, useState } from 'react'
import Button from '../../../../../shared/Button'
import { OrderContext } from '../../../../../../context/OrderContext'
import { calculcateSumToPay } from '../BasketHeader/basketHelper'
import styled from 'styled-components'
import { formatPrice } from '../../../../../../utils/maths'
import { theme } from '../../../../../../theme'
import { toast } from 'react-toastify'
import { RiLoader2Fill } from "react-icons/ri"
import { CHECKOUT_MESSAGE } from '../../../../../../enums/checkout'
import BasketCheckoutErrorMessage from './BasketCheckoutErrorMessage'
import { loading } from '../../../../../../theme/animations'

export default function BasketCheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessagePayment, setErrorMessagePayment] = useState("")

    const { basket, menu, username, clearBasket} = useContext(OrderContext)

    const sumToPay = parseFloat(calculcateSumToPay(basket, menu).toFixed(2))

    const backendUrl = import.meta.env.VITE_STRIPE_PK_AIRCODE_URL as string

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        // // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit()

        if (submitError?.message) {
            // Show error to your customer
            setErrorMessagePayment(submitError.message)
            return
        }

        setIsLoading(true)

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currency: 'eur',
                amount: Math.round(sumToPay*100),
                paymentMethodType: "card"
            }),
        })
        const { client_secret: clientSecret } = await res.json()

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/order/${username}`,
            },
            redirect: 'if_required',
        })

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessagePayment(error.message ? error.message : "")
            return
        }

        // The payment has been processed!
        // This point will only be reached if the payment was successful.
        setErrorMessagePayment("")
        setIsLoading(false)
        handleCloseModal()
        displayToastSuccessNotification()
        clearBasket(username)
    }

    const displayToastSuccessNotification = () => {
        toast.success(CHECKOUT_MESSAGE.ACCEPTED, {
            // icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleCloseModal = () => {
        // Click body to close it
        const modal: HTMLElement | null = document.querySelector('.darkBG')
        modal?.click()
    }

    return (
        <BasketCheckoutFormStyled onSubmit={handleSubmit} className='basket-checkout-form'>
            <h2 className='price'>{ formatPrice(sumToPay) }</h2>
            <PaymentElement />
            <Button
                type='submit'
                label={isLoading ? <RiLoader2Fill className="loading" /> : "Payer"}
                version="success"
                disabled={isLoading || !stripe || !elements}
            />

            {errorMessagePayment && <BasketCheckoutErrorMessage message={errorMessagePayment} />}
        </BasketCheckoutFormStyled>
    )
}

const BasketCheckoutFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 20px;

    .price {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.background_dark};
    }

    .email {
        width: 100%;
        input {
            padding: 0.75rem;
            width: 100%;
        }
    }

    button {
        height: 50px;
        width: 100%;
        margin-top: 20px;
        font-size: ${theme.fonts.size.P1};
        font-weight: ${theme.fonts.weights.bold};
    }
    .loading {
        font-size: 30px;
        -webkit-animation: ${loading} 2s infinite ease;
        animation: ${loading} 2s infinite ease;
    }
`