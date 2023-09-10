import InputText from "../../../../../shared/InputText";
import { styled } from "styled-components";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { Product } from "../../../../../../fakeData/fakeMenu";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../../theme";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {

    const { productSelected } = useContext(OrderContext)

    const [productBeingEdited, setProductBeingEdited] = useState<Product>(EMPTY_PRODUCT);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProductBeingEdited({ ...productBeingEdited, [name]: value });
    }

    const inputTexts = getInputTextsConfig(productSelected);

    return (
        <EditFormStyled className='addProductForm'>
            <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
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
            <div className="submit"></div>
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
    }
`;