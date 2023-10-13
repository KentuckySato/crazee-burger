import { css, keyframes } from "styled-components"
import { theme } from "."

export const fadeInFromRight = keyframes`
    0% {
        position: absolute;
        z-index: -1;
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const adminAnimation = css`
    .admin-appear {
        opacity: 0.1;
        transform: translateY(100%);

        &.admin-appear-active {
            opacity: 1;
            transform: translateY(0);
            transition: all ${theme.animations.speed.slow};
        }
    }
`

export const casinoEffect = css`
    .count-animated-enter {
        transform: translateY(100%);
    }
    .count-animated-enter-active {
        transform: translateY(0%);
        transition: ${theme.animations.speed.fast};
    }

    .count-animated-exit {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateY(0%);
    }
    .count-animated-exit-active {
        transition: ${theme.animations.speed.fast};
        transform: translateY(-100%);
    }
`

export const basketProductsAnimation = css`
    .basket-animation-appear {
        .card {
            transform: translate(100px);
            opacity: 0;
        }
    }
    .basket-animation-appear-active {
        .card {
            transition: ${theme.animations.speed.fast};
            transform: translate(0px);
            opacity: 1;
        }
    }

    .basket-animation-enter {
        .card {
            transform: translate(100px);
            opacity: 0;
        }
    }
    .basket-animation-enter-active {
        .card {
            transition: ${theme.animations.speed.fast};
            transform: translate(0px);
            opacity: 1;
        }
    }

    .basket-animation-exit {
        .card {
            transform: translate(0px);
            opacity: 1;
        }
    }
    .basket-animation-exit-active {
        .card {
            transition: ${theme.animations.speed.fast};
            transform: translate(-100px);
            opacity: 0;
        }
    }
`

export const menuAnimation = css`
    .menu-animation-enter {
        opacity: 0.01;
        transform: translateX(-120px);

        &.menu-animation-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all ${theme.animations.speed.fast} ease-out;
        }
    }

    .menu-animation-exit {
        opacity: 1;
        transform: translateY(0);

        &.menu-animation-exit-active {
            opacity: 0.01;
            transition: ${theme.animations.speed.fast} ease-out;
        }
    }
`
