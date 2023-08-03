import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
    label: string
    type: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    btnStyle?: object
    leftIcon?: JSX.Element
	rightIcon?: JSX.Element
}

export default function Button({
    label, type,
    leftIcon, rightIcon,
    className, onClick,
    btnStyle,
    disabled = false
}: Props) {


    return (
        <ButtonStyled
            className={className}
            type={type}
            onClick={onClick}
            style={btnStyle}
            disabled={disabled}
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

const ButtonStyled = styled.button`
    position: relative;
    display: inline-flex;
    justify-content: center;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.heavy};

    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: all 0.2s ease-out 0s;
    }

    &:disabled {
        background-color: ${theme.colors.greyLight};
    }

    &:focus {
        border: 1px solid ${theme.colors.white};
    }

    .icon {
        display: flex;
        position: relative;
        top: 2px;
        font-size: ${theme.fonts.P0};
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`;