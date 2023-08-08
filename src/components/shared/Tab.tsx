import { styled } from "styled-components";
import { theme } from "../../theme";

type TabProps = {
    id?: string;
    className?: string;
    label?: string;
    onClick: (e: any) => void;
    Icon?: JSX.Element;
}

export default function Tab({id, className, label, onClick, Icon}: TabProps) {
  return (
      <TabStyled id={id} className={className} onClick={onClick}>
          <div className="icon">{Icon}</div>
          {label}
      </TabStyled>
  )
}

const TabStyled = styled.button`
    height: 43px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${theme.colors.white};

    position: relative;
    top: 1px;
    left: 5%;

    /* border */
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

    box-shadow: ${theme.shadows.subtle};

    /* font */
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greySemiDark};
    line-height: normal;
    text-align: center;

    .icon {
        display: flex;
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        border-bottom: 2px solid ${theme.colors.white};
    }

    &.active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
    }
`;
