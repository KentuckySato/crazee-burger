import styled from "styled-components";
import ImagePreview from "../AdminPanel/ImagePreview";
import InputText, { InputTextProps } from "../../../../../../shared/InputText";
import { getInputTextsConfig } from "../AdminPanel/inputTextConfig";
import { PropsWithChildren, ReactNode } from "react";
import { Product } from "../../../../../../../enums/product";

type AdminFormProps = {
    product: Product
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
    children: ReactNode
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onFocus?: React.FocusEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    onSubmit?: React.FormEventHandler
}

export default function AdminForm({ product, inputRef, onChange, onFocus, onBlur, onSubmit, children }: PropsWithChildren<AdminFormProps>) {

    const inputTexts = getInputTextsConfig(product);

    return (
        <AdminFormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <div className="text-inputs">
                {inputTexts.map((inputText: InputTextProps) => (
                    <InputText
                        key={inputText.id}
                        ref={inputRef && inputText.name === "title" ? inputRef : null}
                        {...inputText}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
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
