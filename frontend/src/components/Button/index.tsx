import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../hooks/useAppContext";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textValues?: { [key: string]: string };
  iconName?: string;
  isSending?: boolean;
}

const Button = ({ isSending, iconName, text, textValues, ...rest }: Props) => {
  const { isWhiteMode } = useAppContext();

  return (
    <ButtonStyle
      {...rest}
      disabled={isSending || rest.disabled}
      isWhiteMode={isWhiteMode}
    >
      {iconName && <img src={iconName} alt={iconName} className="icon" />}
      <FormattedMessage id={isSending ? "sending" : text} values={textValues} />
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ isWhiteMode?: boolean }>`
  height: 44px;
  width: 100%;
  ${({ theme }) => theme.fontStyles[16]}
  color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? theme.Secondary_Black : "#FFF"};
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Dark_2};
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : "none"};
  .icon {
    margin-right: 5px;
  }
  &:disabled {
    color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};
  }
  &:hover:enabled {
    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
  }

  &.secondary {
    height: 60px;
    background-color: ${({ theme }) => theme.Secondary_Black};
    color: #fff;
    border-radius: 3px;

    &:disabled {
      background-color: ${({ theme }) => theme.Secondary_Grey_3};
    }
    &:hover:enabled {
      background-color: ${({ theme }) => theme.Secondary_Grey_1};
    }
  }
  &.third {
    height: 60px;
    background-color: #fff;
    color: ${({ theme }) => theme.Secondary_Black};
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.Secondary_Black};
    &:disabled {
      background-color: #fff;
      color: ${({ theme }) => theme.Secondary_Grey_3};
      border: 1px solid ${({ theme }) => theme.Secondary_Grey_3};
    }
    &:hover:enabled {
      background-color: #fff;
      color: ${({ theme }) => theme.Secondary_Grey_1};
      border: 1px solid ${({ theme }) => theme.Secondary_Grey_1};
    }
  }
`;

export default Button;
