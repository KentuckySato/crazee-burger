import { useContext, useState } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import AdminForm from "../Form/AdminForm";
import SubmitButton from "./SubmitButton";

export default function AddForm() {

    const { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
        };

        handleAddProduct(newProductToAdd);

        setNewProduct(EMPTY_PRODUCT);

        displaySuccessMessage();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Set the new value in the newProduct object
        // Dynamically set the property name in the object
        // Dynamic property names in JavaScript
        setNewProduct({ ...newProduct, [name]: value });
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)

        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
    }

    return (
        <AdminForm
            product={newProduct}
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <SubmitButton isSubmitted={isSubmitted} />
        </AdminForm>
    )
}