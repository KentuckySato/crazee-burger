import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react'
import Button from '../../../../../shared/Button'
import { OrderContext } from '../../../../../../context/OrderContext'
import { calculcateSumToPay } from '../BasketHeader/basketHelper'
import InputText from '../../../../../shared/InputText'
import styled from 'styled-components'
import { formatPrice } from '../../../../../../utils/maths'
import { theme } from '../../../../../../theme'
import { toast } from 'react-toastify'

export default function BasketCheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { basket, menu, username } = useContext(OrderContext)

    const sumToPay = parseFloat(calculcateSumToPay(basket, menu).toFixed(2))

    const backendUrl = import.meta.env.VITE_STRIPE_PK_AIRCODE_URL

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (elements == null || stripe == null) {
            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError?.message) {
            // Show error to your customer
            setErrorMessage(submitError.message)
            return;
        }
        setIsLoading(true);

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currency: 'eur',
                email: emailInput,
                amount: Math.round(sumToPay*100),
                paymentMethodType: "card"
            }),
        });

        const { client_secret: clientSecret } = await res.json();

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/order/${username}`,
            },
            redirect: 'if_required',
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
        setIsLoading(false)
        displayToastNotification()
        handleCloseModal()
    };

    const displayToastNotification = () => {

        if (!errorMessage) {
            toast.info("Paiement accepté.", {
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
    }

    const handleCloseModal = () => {
        // Click body to close it
        const modal = document.querySelector('.darkBG')
        modal?.click()
    }


    return (
        <BasketCheckoutFormStyled onSubmit={handleSubmit} className='basket-checkout-form'>
            <InputText
                value={emailInput}
                onChange={(e => setEmailInput(e.target.value))}
                type="email"
                id="email-input"
                placeholder='Ton email'
            />
            <PaymentElement />

            <Button
                type='submit'
                label={isLoading ? "En attente..." : "Payer " + formatPrice(sumToPay)}
                version="success"
                disabled={isLoading || !stripe || !elements}
            />

            {errorMessage && <div>{errorMessage}</div>}
        </BasketCheckoutFormStyled>
    )
}

const BasketCheckoutFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    button {
        height: 50px;
        width: 100%;
        margin-top: 20px;
        font-size: ${theme.fonts.size.P1};
        font-weight: ${theme.fonts.weights.bold};
    }

    /* spinner/processing state, errors */
    .spinner,
    .spinner:before,
    .spinner:after {
        border-radius: 50%;
    }

    .spinner {
        color: #ffffff;
        font-size: 22px;
        text-indent: -99999px;
        margin: 0px auto;
        position: relative;
        width: 20px;
        height: 20px;
        box-shadow: inset 0 0 0 2px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    .spinner:before,
    .spinner:after {
        position: absolute;
        content: '';
    }

    .spinner:before {
        width: 10.4px;
        height: 20.4px;
        background: #5469d4;
        border-radius: 20.4px 0 0 20.4px;
        top: -0.2px;
        left: -0.2px;
        -webkit-transform-origin: 10.4px 10.2px;
        transform-origin: 10.4px 10.2px;
        -webkit-animation: loading 2s infinite ease 1.5s;
        animation: loading 2s infinite ease 1.5s;
    }

    .spinner:after {
        width: 10.4px;
        height: 10.2px;
        background: #5469d4;
        border-radius: 0 10.2px 10.2px 0;
        top: -0.1px;
        left: 10.2px;
        -webkit-transform-origin: 0px 10.2px;
        transform-origin: 0px 10.2px;
        -webkit-animation: loading 2s infinite ease;
        animation: loading 2s infinite ease;
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;