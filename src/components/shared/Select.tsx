import styled, { RuleSet, css } from 'styled-components';
import { theme } from '../../theme';
import { ForwardedRef, forwardRef } from 'react';
import { ProductId } from '../../enums/product';

export type SelectProps = {
    id?: ProductId
    name: string
    className?: string
    value: string | number | boolean | undefined
    required?: boolean
    inputStyle?: object
    options: string[]
    containerStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    version?: string
    disabled?: boolean
    extraProps?: React.InputHTMLAttributes<HTMLSelectElement>
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    onFocus?: React.FocusEventHandler<HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

type Variant = {
    version: string
}

const Select = forwardRef(({
    id, name, className, value, required = false,
    options,
    onChange, onFocus, onBlur,
    inputStyle, containerStyle,
    leftIcon, rightIcon,
    disabled = false, version = 'normal', extraProps
}: SelectProps, ref: ForwardedRef<HTMLSelectElement | null>) => {
    return (
        <SelectStyled style={containerStyle} className={className} version={version}>
            {leftIcon && <div className='icon'>{leftIcon}</div>}
            <select
                id={id}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraProps}

            >
                {options.map((option) => {
                    return <option value={option} selected={option.selected}>{option}</option>
                })}
            </select>
            {rightIcon && <div className='icon'>{rightIcon}</div>}
        </SelectStyled>
    )
})

const SelectStyled = styled.div<Variant>`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;

    .icon {
        display: flex;
        font-size: ${theme.fonts.size.SM};
        margin-right: 13px;
    }

    input {
        border: none;
        font-size: ${theme.fonts.size.SM};
        width: 100%;

        &:focus {
            outline: none;
        }

        &:disabled {
            background-color: ${theme.colors.greyLight};
        }

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }

    }

    ${({ version }) => extraStyle[version]}

`;

const extraStyleNormal = css`
    background-color: ${theme.colors.white};
    padding: 18px 28px;
    color: ${theme.colors.greySemiDark};

    input {
        color: ${theme.colors.dark};

        &:placeholder {
            background-color: ${theme.colors.white};
        }
    }
`

const extraStyleMinimalist = css`
    background-color: ${theme.colors.background_white};
    padding: 8px 24px;
    color: ${theme.colors.greyBlue};

    input {
        color: ${theme.colors.dark};
        background-color: ${theme.colors.background_white};

        &:placeholder {
            outline: 0;
        }
    }
`

const extraStyle: { [key: string]: RuleSet<object> } = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist
}

export default Select;