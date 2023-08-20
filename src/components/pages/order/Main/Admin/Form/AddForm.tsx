import InputText from "../../../../../shared/InputText";
import { styled } from "styled-components";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import Button from "../../../../../shared/Button";
import ImagePreview from "../AdminPanel/ImagePreview";
import { getInputTextsConfig } from "../AdminPanel/inputTextConfig";
import SubmitMessage from "../AdminPanel/SubmitMessage";

export const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

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
        <AddFormStyled onSubmit={handleSubmit} className='addProductForm'>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
            <div className="text-inputs">
                {inputTexts.map((inputText) => (
                    <InputText
                        key={inputText.id}
                        {...inputText}
                        onChange={handleChange}
                        version={inputText.version}
                    />
                ))}
            </div>
            <div className="submit">
                <Button
                    type="submit"
                    className="submit-button"
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && <SubmitMessage />}
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 8px 20px;
    width: 70%;
    height: 100%;
    margin: auto 0px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-self: flex-start;

    .empty-image {
        height: 100%;
        width: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        border: 1px solid ${theme.colors.greyLight};
        line-height: 1.5;
        color: ${theme.colors.greySemiDark};
        border-radius: ${theme.borderRadius.round};
    }
    .text-inputs {
        display: grid;
        grid-area: 1 / 2 / -2 / 3;
        gap: 8px;
    }
    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;

        /* .submit-button {
            height: 100%;
        } */
    }
`;
