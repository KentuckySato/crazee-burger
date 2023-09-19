import styled from "styled-components";
import ImagePreview from "../AdminPanel/ImagePreview";
import { Product } from "../../../../../../fakeData/fakeMenu";
import InputText from "../../../../../shared/InputText";
import { InputTextType, getInputTextsConfig } from "../AdminPanel/inputTextConfig";
import { ReactNode } from "react";

type FormProps = {
    product: Product
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
    children: ReactNode
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit?: React.FormEventHandler
}

export default function AdminForm({ product, inputRef, onChange, onSubmit, children }: FormProps) {

    const inputTexts = getInputTextsConfig(product);

    return (
        <AdminFormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <div className="text-inputs">
                {inputTexts.map((inputText: InputTextType) => (
                    <InputText
                        key={inputText.id}
                        ref={inputRef && inputText.name === "title" ? inputRef : null}
                        {...inputText}
                        onChange={onChange}
                        version={inputText.version}
                    />
                ))}
            </div>
            <div className="footer">
                {children}
            </div>
        </AdminFormStyled>
    )
}

const AdminFormStyled = styled.form`
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

    .text-inputs {
        display: grid;
        grid-area: 1 / 2 / -2 / 3;
        gap: 8px;
    }
    .footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`;
