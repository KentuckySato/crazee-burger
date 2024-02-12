import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react'
import Button from '../../../../../shared/Button'
import { OrderContext } from '../../../../../../context/OrderContext'
import { calculcateSumToPay } from '../BasketHeader/basketHelper'
import InputText from '../../../../../shared/InputText'


export default function BasketCheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const { basket, menu, username } = useContext(OrderContext)
    const sumToPay = parseFloat(calculcateSumToPay(basket, menu).toFixed(2))

    const backendUrl = import.meta.env.VITE_STRIPE_PK_AIRCODE_URL

    console.log('backendUrl: ', backendUrl)
    console.log('sumToPay: ', sumToPay * 100)

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

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currency: 'eur',
                email: emailInput,
                amount: sumToPay * 100,
                paymentMethodType: "card"
            }),
        });
        console.log('res: ', res)

        const { client_secret: clientSecret } = await res.json();
        console.log('client_secret: ', clientSecret)

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${window.location.origin}/order/${username}`,
            },
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
    };


    return (
        <form onSubmit={handleSubmit} className='px-4'>
            <InputText
                value={emailInput}
                onChange={(e => setEmailInput(e.target.value))}
                type="email"
                id="email-input"
                placeholder='johndoe@gmail.com'
            />
            <PaymentElement />
            <Button type='submit' label='Payer' version="success" disabled={!stripe || !elements} />

            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};