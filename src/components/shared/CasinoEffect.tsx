import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

type CasinoEffectProps = {
    count: string
    className?: string
}

export default function CasinoEffect({ count, className }: CasinoEffectProps) {
    return (
        <CasinoEffectStyled>
            <TransitionGroup appear={true} component={null} className={"transition-group"}>
                <CSSTransition key={count} classNames={"count-animated"} timeout={300}>
                    <span className={className}>{count}</span>
                </CSSTransition>
            </TransitionGroup>
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }

    .count-animated-enter{
        transform: translateY(100%);
    }
    .count-animated-enter-active{
        transform: translateY(0%);
        transition: 300ms;
    }

    .count-animated-exit{
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateY(0%);
    }
    .count-animated-exit-active{
        transition: 300ms;
        transform: translateY(-100%);
    }
`;
