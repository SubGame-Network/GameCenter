/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Cell } from "react-table";
import styled from "styled-components";
import { formatNumber, formatTime } from "utils/format";
import useAppContext from "../../hooks/useAppContext";
import { FormattedMessage } from "react-intl";
export const renderResult = (Cell: Cell) => {
  const { isWhiteMode } = useAppContext();

  if (Cell.value !== "-" && parseInt(Cell.value) < 0) {
    return (
      <RenderResultStyle className="green" isWhiteMode={isWhiteMode}>
        {Cell.value !== "-" && formatNumber(Cell.value)}
      </RenderResultStyle>
    );
  } else if (Cell.value === "-") {
    return (
      <RenderResultStyle isWhiteMode={isWhiteMode}>
        {Cell.value}
      </RenderResultStyle>
    );
  } else {
    return (
      <RenderResultStyle isWhiteMode={isWhiteMode}>
        +{formatNumber(Cell.value)}
      </RenderResultStyle>
    );
  }
};

export const renderYouBet = (Cell: any) => {
  const bet = Cell.row.original.bet;
  const event = Cell.row.original.oddEven;
  return (
    <span>
      {formatNumber(bet)} / {event}
    </span>
  );
};
const RenderResultStyle = styled.div<{ isWhiteMode: boolean }>`
  ${({ theme }) => theme.fontStyles[14]};
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#fff"};
  &.green {
    color: ${({ theme }) => theme.Function_Green};
  }
`;

export const renderTimestamp = ({ value }: any) => {
  return (
    <p
      style={{
        width: "100%",
        textAlign: "left",
        wordBreak: "break-word",
      }}
    >
      {formatTime(value)}
    </p>
  );
};
export const renderBalance = ({ value }: any) => {
  return (
    <p
      style={{
        width: "100%",
        textAlign: "left",
        wordBreak: "break-word",
      }}
    >
      {formatNumber(value)}
    </p>
  );
};

export const renderAddress = (address: any, top: string, right: string) => {
  const { isWhiteMode } = useAppContext();

  return (
    <RenderAddressStyle isWhiteMode={isWhiteMode} top={top} right={right}>
      {address}
      <div className="tip">
        <FormattedMessage id="clickToCopy" />
      </div>
    </RenderAddressStyle>
  );
};

export const renderNumber = ({ value }: any) => {
  const { isWhiteMode } = useAppContext();

  if (value !== "-" && parseInt(value) < 0) {
    return (
      <RenderNumberStyle className="green" isWhiteMode={isWhiteMode}>
        {value !== "-" && formatNumber(value)}
      </RenderNumberStyle>
    );
  } else if (value === "-") {
    return (
      <RenderNumberStyle isWhiteMode={isWhiteMode}>{value}</RenderNumberStyle>
    );
  } else {
    return (
      <RenderNumberStyle isWhiteMode={isWhiteMode}>
        +{formatNumber(value)}
      </RenderNumberStyle>
    );
  }
};
const RenderNumberStyle = styled.div<{ isWhiteMode: boolean }>`
  width: "100%";
  text-align: "left";
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#fff"};
  &.green {
    color: ${({ theme }) => theme.Function_Green};
  }
`;
const RenderAddressStyle = styled.div<{
  isWhiteMode: boolean;
  top: string;
  right: string;
}>`
  cursor: pointer;
  position: relative;
  text-align: left;
  .tip {
    padding: 5px 10px;
    position: absolute;
    right: ${({ right }) => {
      return right;
    }};
    top: ${({ top }) => {
      return top;
    }};
    display: none;
    background: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#fff" : theme.Dark_3};
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Dark_Bg : "#fff"};
    border: ${({ isWhiteMode }) =>
      isWhiteMode ? "1px solid #e8e8e8;" : "none"};
    box-sizing: border-box;
    border-radius: ${({ isWhiteMode }) => (isWhiteMode ? "10px" : "3px")};
    ${({ theme }) => theme.fontStyles[14]};
  }
  :hover {
    color: ${({ theme }) => theme.Function_complete};
    .value {
      color: ${({ theme }) => theme.Function_complete};
    }
    .tip {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Dark_Bg : "#fff"};
      display: block;
    }
  }
`;
