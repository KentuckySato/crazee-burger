import styled from "styled-components";
import ImagePreview from "../AdminPanel/ImagePreview";
import InputText, { InputTextProps } from "../../../../../../shared/InputText";
import { getInputTextsConfig } from "../AdminPanel/inputTextConfig";
import { PropsWithChildren, ReactNode } from "react";
import { Product } from "../../../../../../../enums/product";
import { getSelectsConfig } from "../AdminPanel/selectConfig";
import Select, { SelectProps } from "../../../../../../shared/Select";

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

    const inputTexts = getInputTextsConfig(product)
    const inputSelects = getSelectsConfig(product)

    return (
        <AdminFormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <div className="text-inputs">
                {inputTexts.map((inputText: InputTextProps) => (
                    <InputText
                        key={inputText.id}
                        ref={inputRef && inputText.name === "title" ? inputRef : null}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        version={inputText.version}
                        {...inputText}
                    />
                ))}

                {inputSelects.map((select: SelectProps) => (
                    <Select
                        key={select.id}
                        {...select}
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
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 8px;

        .title {
            grid-area: 1/1/2/4;
        }
        .image-source {
            grid-area: 2/1/3/4;
        }
        .price {
            grid-area: 3/1/4/2;
        }
        .is-available {
            padding: 8px 16px;
            grid-area: 3/2/4/3;
        }
        .is-publicised {
            padding: 8px 16px;
            grid-area: 3/3/4/4;
        }
    }
    .footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`;
