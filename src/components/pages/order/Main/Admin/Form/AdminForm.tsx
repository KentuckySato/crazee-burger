import styled from "styled-components";
import { theme } from "../../../../../../theme";
import ImagePreview from "../AdminPanel/ImagePreview";
import { Product } from "../../../../../../fakeData/fakeMenu";
import InputText from "../../../../../shared/InputText";
import { InputTextType } from "../AdminPanel/inputTextConfig";
import { ReactNode } from "react";

type FormProps = {
    product: Product
    inputs: InputTextType[]
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
    children: ReactNode
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onSubmit?: React.FormEventHandler
}

export default function AdminForm({ product, inputs, inputRef, onChange, onSubmit, children }: FormProps) {

    return (
        <AdminFormStyled onSubmit={onSubmit}>
            {Image && <ImagePreview imageSource={product.imageSource} title={product.title} />}
            <div className="text-inputs">
                {inputs.map((inputText: InputTextType) => (
                    <InputText
                        key={inputText.id}
                        ref={inputText.name === "title" ? inputRef : null}
                        {...inputText}
                        onChange={onChange}
                        version={inputText.version}
                    />
                ))}
            </div>
            <div className="form-footer">
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
    .form-footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`;
