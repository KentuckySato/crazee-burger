import styled, { RuleSet, css } from 'styled-components';
import { theme } from '../../theme';
import { ForwardedRef, forwardRef } from 'react';

type InputTextType = {
    name: string
    className?: string
    placeholder: string
    value: string | number
    required?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    extraProps?: React.InputHTMLAttributes<HTMLInputElement>
    disabled?: boolean
    inputStyle?: object
    containerStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    version?: string
}

type Custom = {
    version: string
}

const InputText = forwardRef(({
    leftIcon, rightIcon,
    className, placeholder, name, value, required = false, onChange,
    inputStyle, containerStyle, version = 'normal',
    disabled = false, extraProps
}: InputTextType, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <InputTextStyled style={containerStyle} className={className} version={version}>
            {leftIcon && <div className='icon'>{leftIcon}</div>}
            <input
                ref={ref}
                onChange={onChange}
                value={value}
                type="text"
                name={name}
                placeholder={placeholder}
                required={required}
                style={inputStyle}
                disabled={disabled}
                {...extraProps}
            />
            {rightIcon && <div className='icon'>{rightIcon}</div>}
        </InputTextStyled>
    )
})

const InputTextStyled = styled.div<Custom>`
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
    padding: 8px 16px;
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

export default InputText;