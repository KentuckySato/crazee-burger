import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components'
import { Elements } from '@stripe/react-stripe-js';
import BasketCheckoutForm from './BasketCheckoutForm'


const options = {
    mode: 'payment',
    amount: 100,
    currency: 'eur',
}

export default function BasketCheckout() {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file

  return (
    <BasketCheckoutStyled>
        <Elements stripe={stripePromise} options={options} >
            <BasketCheckoutForm />
        </Elements>
    </BasketCheckoutStyled>
  )
}

const BasketCheckoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;
