import styled, { RuleSet, css } from 'styled-components';
import { theme } from '../../theme';

type Props = {
    label: string | JSX.Element
    type: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    btnStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    version?: 'primary' | 'success' | 'danger' | 'dark'
}

type Custom = {
    version: string
}

export default function Button({
    label, type,
    leftIcon, rightIcon,
    className, onClick,
    btnStyle,
    disabled = false,
    version = 'primary' ,
}: Props) {
    return (
        <ButtonStyled
            className={className}
            type={type}
            onClick={onClick}
            style={btnStyle}
            disabled={disabled}
            version={version}
        >
            {leftIcon &&
                <div className='icon'>{leftIcon}</div>
            }
            <span>{label}</span>
            {rightIcon &&
                <div className='icon'>{rightIcon}</div>
            }
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button<Custom>`
    ${({ version }) => extraStyle[version]}
`;

const extraStylePrimary = css`
    width: 100%;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
    cursor: pointer;


    &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: all 0.2s ease-out 0s;
    }

    &:disabled {
        opacity: 50%;
        cursor: not-allowed;
    }

    &:focus {
        border: 1px solid ${theme.colors.white};
    }

    &:active {
        background-color: ${theme.colors.primary} !important;
        color: ${theme.colors.white} !important;
    }

    .icon {
        display: flex;
        position: relative;
        top: 2px;
        font-size: ${theme.fonts.size.SM};
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`

const extraStyleSuccess = css`
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.success};
    padding: 0px 1.5em;
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.semiBold};
    height: 35px;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.success};
        background-color: ${theme.colors.white};
    }
    &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
        transition: all 0.2s ease-out 0s;
    }

    &:disabled {
        opacity: 50%;
        cursor: not-allowed;
    }

    &:focus {
        border: 1px solid ${theme.colors.white};
    }

    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
`
const extraStyleDanger = css`
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.red};
    padding: 0px 1.5em;
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.semiBold};
    height: 35px;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.white};
        background-color: ${theme.colors.red};
    }

    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.red};
        border: 1px solid ${theme.colors.success};
    }
`

const extraStyleDark = css`
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.background_dark};
    padding: 0px 1.5em;
    color: ${theme.colors.primary};
    background: ${theme.colors.background_dark};
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.regular};
    height: 35px;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
    }

    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border: 1px solid ${theme.colors.background_dark};
    }
`

const extraStyle: { [key: string]: RuleSet<object> } = {
    primary: extraStylePrimary,
    success: extraStyleSuccess,
    danger: extraStyleDanger,
    dark: extraStyleDark
}