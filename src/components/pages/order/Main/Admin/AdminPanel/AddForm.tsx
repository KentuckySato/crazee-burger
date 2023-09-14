import { useContext, useState } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import Button from "../../../../../shared/Button";
import { getInputTextsConfig } from "./inputTextConfig";
import SubmitMessage from "./SubmitMessage";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import AdminForm from "../Form/AdminForm";

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

    const inputTexts = getInputTextsConfig(newProduct);

    return (
        <AdminForm
            product={newProduct}
            inputs={inputTexts}
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <Button
                type="submit"
                className="submit-button"
                label={"Ajouter un nouveau produit au menu"}
                version="success"
            />
            {isSubmitted && <SubmitMessage />}
        </AdminForm>
    )
}