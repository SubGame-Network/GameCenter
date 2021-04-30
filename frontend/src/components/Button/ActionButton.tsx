import React from "react";
import styled from "styled-components";
import useAppContext from "../../hooks/useAppContext";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | string;
  disabled?: boolean;
}

const ActionButton: React.FunctionComponent<Props> = ({
  icon,
  disabled,
  ...rest
}) => {
  const { isWhiteMode } = useAppContext();
  return (
    <Body disabled={disabled} {...rest} isWhiteMode={isWhiteMode}>
      {icon && icon}
    </Body>
  );
};

const Body = styled.button<{ isWhiteMode?: boolean }>`
  background: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? "#FFF" : theme.Dark_3};
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#FFF"};
  border-radius: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Black : "none"};
  &:hover {
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_1 : "#FFF"};
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#FFF" : theme.Dark_3};
    border: 1px solid
      ${({ isWhiteMode, theme }) =>
        isWhiteMode ? theme.Secondary_Grey_1 : "none"};
  }

  &:disabled {
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#FFF" : theme.Dark_2};
    border: 1px solid
      ${({ isWhiteMode, theme }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : "none"};
  }
`;

export default ActionButton;
