import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { IconSharpArrowdown, IconSharpArrowup } from "react-icon-guanfan";
import useAppContext from "../../hooks/useAppContext";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RuleBtn = ({ ...rest }: Props) => {
  const { isWhiteMode } = useAppContext();

  return (
    <RuleBtnStyle isWhiteMode={isWhiteMode} {...rest}>
      <p className="mt-5">
        {" "}
        <FormattedMessage id="gamerule" />
      </p>

      <IconSharpArrowup className="arrowUp" />
      <IconSharpArrowdown className="arrowDown" />
    </RuleBtnStyle>
  );
};

const RuleBtnStyle = styled.button<{ isWhiteMode?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 13px 10px 20px;
  width: 133px;
  height: 42px;
  border: 1px solid
    ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#FFF"};
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#FFF"};

  background-color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? "#FFF" : theme.Dark_Bg};
  border-radius: 60px;
  .mt-5 {
    margin-top: -5px;
  }
  .arrowUp {
    margin-top: -3px;

    display: none;
  }
  .arrowDown {
    margin-top: -3px;
  }
  &.active,
  &:hover:enabled {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Function_complete};
    border: 1px solid
      ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : theme.Function_complete};
    color: #fff;
  }
  &.active {
    .arrowUp {
      display: block;
      margin-top: -3px;
    }
    .arrowDown {
      margin-top: -3px;

      display: none;
    }
  }
  &:disabled {
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_4};
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#FFF" : theme.Dark_Bg};
    border: 1px solid
      ${({ isWhiteMode, theme }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_4};
  }
`;

export default RuleBtn;
