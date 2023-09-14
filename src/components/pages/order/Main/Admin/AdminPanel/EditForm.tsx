import InputText from "../../../../../shared/InputText";
import { styled } from "styled-components";
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../../theme";
import SubmitMessage from "./SubmitMessage";

export default function EditForm() {

    const { productSelected, setProductSelected, handleEditProduct, titleFieldRef } = useContext(OrderContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        };

        setProductSelected(productBeingUpdated); // update EditForm
        handleEditProduct(productBeingUpdated); // update menu
    }

    const inputTexts = getInputTextsConfig(productSelected);

    return (
        <EditFormStyled className='editProductForm'>
            <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
            <div className="text-inputs">
                {inputTexts.map((inputText) => (
                    <InputText
                        key={inputText.id}
                        ref={inputText.name === "title" ? titleFieldRef : null}
                        {...inputText}
                        onChange={handleChange}
                        version={inputText.version}
                    />
                ))}
            </div>
            <div className="submit">
                <span className="sentence">
                    Cliquer sur un produit du menu pour le modifier{" "}
                    <span className="live-update">en temps réel</span>
                </span>
            </div>
        </EditFormStyled>
    )
}

const EditFormStyled = styled.form`
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

        .sentence {
            color: ${theme.colors.primary};
            font-size: ${theme.fonts.size.SM};
            .live-update {
                text-decoration: underline;
            }
        }
    }
`;