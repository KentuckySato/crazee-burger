import styled from 'styled-components'
import { theme } from '../../theme/index'

type LogoProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Logo({ className, onClick }: LogoProps) {
    return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>Crazee</h1>
            <img src="/images/logo-burger.png" alt="logo-burger" />
            <h1>Burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display: flex;
    color: ${theme.colors.primary};
    max-height: 100%;
    min-width: 200px;
    align-items: center;

    h1 {
        display: inline;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P4};
        line-height: 1em;
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }

    img {
        object-fit: contain;
        object-position: center center;
        height: 60px;
        width: 80px;
        margin: 0px 5px;
    }

    @media(max-width: 700px) {
        min-width: auto;
        h1 {
            display: none;
        }
    }
`