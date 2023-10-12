import { css } from "styled-components"
import { theme } from "."

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
