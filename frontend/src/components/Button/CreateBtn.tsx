import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../hooks/useAppContext";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textValues?: { [key: string]: string };
  isSending?: boolean;
  icon?: JSX.Element | string;
}

const CreateBtn = ({ icon, isSending, text, textValues, ...rest }: Props) => {
  const { isWhiteMode } = useAppContext();

  return (
    <ButtonStyle
      {...rest}
      disabled={isSending || rest.disabled}
      isWhiteMode={isWhiteMode}
      icon={icon}
    >
      {icon && icon}
      <p>
        <FormattedMessage
          id={isSending ? "sending" : text}
          values={textValues}
        />
      </p>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{
  isWhiteMode?: boolean;
  icon?: JSX.Element | string;
}>`
  height: 50px;
  width: 100%;
  padding: 10px 20px;
  ${({ theme }) => theme.fontStyles[18]}
  color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Primary_1};
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? theme.Primary_1 : theme.Dark_Bg};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? "space-between" : "center")};
  border: 1px solid
    ${({ isWhiteMode, theme }) => (isWhiteMode ? "none" : theme.Primary_1)};
  p {
    width: 120px;
    margin-top: -5px;
  }
  &.blue {
    color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? "#FFF" : theme.Function_complete};
    border: 1px solid
      ${({ isWhiteMode, theme }) =>
        isWhiteMode ? "none" : theme.Function_complete};

    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Function_complete : theme.Dark_Bg};

    &:hover:enabled {
      color: #fff;

      background-color: ${({ isWhiteMode, theme }) =>
        isWhiteMode ? "#072A6C" : theme.Function_complete};
    }
  }

  &:disabled {
    color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};

    border: 1px solid
      ${({ isWhiteMode, theme }) => (isWhiteMode ? "none" : theme.Dark_3)};
  }
  &:hover:enabled {
    color: #fff;

    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? "#7E0043" : theme.Primary_1};
  }
`;

export default CreateBtn;
