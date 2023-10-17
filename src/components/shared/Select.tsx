import styled from 'styled-components';
import { theme } from '../../theme';
import { ProductId } from '../../enums/product';

export type SelectProps = {
    id?: ProductId
    name: string
    className?: string
    value: string | number | boolean | undefined
    required?: boolean
    options: Options[]
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    extraProps?: React.InputHTMLAttributes<HTMLSelectElement>
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    onFocus?: React.FocusEventHandler<HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

type Options = {
    id: ProductId
    value: boolean
    label: string
}

export default function Select({
    id, name, className, value, options,
    onChange, onFocus, onBlur,
    leftIcon, rightIcon,
    extraProps
}: SelectProps) {
    return (
        <SelectStyled className={className}>
            {leftIcon && <div className='icon'>{leftIcon}</div>}
            <select
                id={id}
                value={value}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraProps}

            >
                {options.map(({ id, value, label }) => {
                    return <option key={id} value={value}>{label}</option>
                })}
            </select>
            {rightIcon && <div className='icon'>{rightIcon}</div>}
        </SelectStyled>
    )
}

const SelectStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;

    background-color: ${theme.colors.background_white};
    padding: 8px 24px;
    color: ${theme.colors.greyBlue};

    .icon {
        display: flex;
        font-size: ${theme.fonts.size.SM};
        margin-right: 13px;
    }

    select {
        width: 100%;
        border: none;
        background-color: ${theme.colors.background_white};
        font-size: 14px;
        font-weight: ${theme.fonts.weights.regular};
        color: ${theme.colors.dark};

        &.focus {
            outline: none;
        }
    }
`