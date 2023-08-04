import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
    name: string
    className?: string
    placeholder: string
    type: string
    value: string | number
    required?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    otherInputProps?: React.InputHTMLAttributes<HTMLInputElement>
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    inputStyle?: object
    leftIcon?: JSX.Element
	rightIcon?: JSX.Element
}

export default function InputText({
    leftIcon, rightIcon, size = 'sm',
    className, placeholder, name,
    type, value, required, onChange,
    otherInputProps, inputStyle,
    disabled = false
}: Props) {

    if (size === 'lg') {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.P3,
            height: 32,
        }
    } else if (size === 'md') {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.P2,
            height: 24,
        }
    } else {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.P0,
        }
    }

    return (
        <InputTextStyled>
            {leftIcon && leftIcon}
            <input
                {...otherInputProps}
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                required={required}
                style={inputStyle}
                disabled={disabled}
            />
            {rightIcon && rightIcon}
        </InputTextStyled>
    )
}

const InputTextStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 15px;
    margin: 18px 0px;
    white-space: nowrap;

    svg {
        margin-right: 12.8px;
        font-size: ${theme.fonts.size.P0};
        min-width: 1em;
        color: ${theme.colors.greyMedium};
    }

    input {
        display: flex;
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: ${theme.borderRadius.round};
        border: none;
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.P0};

        &:disabled {
            background-color: ${theme.colors.greyLight};
        }

    }

    ::placeholder {
        color: ${theme.colors.greyMedium};
    }
`;