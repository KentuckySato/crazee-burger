import { useContext } from "react"
import { OrderContext } from "../../../../../../context/OrderContext"
import Button from "../../../../../shared/Button"
import { FaCashRegister } from "react-icons/fa"

type ButtonCheckoutProps = {
    onClick: () => void
}

export default function ButtonCheckout({onClick}: ButtonCheckoutProps) {
    const { basket } = useContext(OrderContext)

    return (
        <>
            {basket.length > 0 && <Button
                label="Checkout"
                className="checkout"
                rightIcon={<FaCashRegister />}
                type="button"
                version="success"
                onClick={onClick}
            />}
        </>
    )
}
