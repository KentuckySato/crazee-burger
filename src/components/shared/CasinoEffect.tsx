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
                    <div className={className}>{count}</div>
                </CSSTransition>
            </TransitionGroup>
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.div`
    max-width: 100px;
    position: relative;
    overflow-y: hidden;

    .count-animated-enter{
        transform: translateY(100%);
    }
    .count-animated-enter-active{
        transform: translateY(0%);
        transition: 300ms;
    }

    .count-animated-exit{
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(0%);
    }
    .count-animated-exit-active{
        transition: 300ms;
        transform: translateY(-100%);
    }
`;
