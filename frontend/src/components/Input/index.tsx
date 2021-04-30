import React, { useRef } from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";

import Label from "./Label";
import useAppContext from "../../hooks/useAppContext";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  limitMaxDecimal?: number;
  unit?: string;
  unitIcon?: JSX.Element;
  unitButtonClick?: () => void;
  error?: boolean;
  errorMessage?: string;
  errorMessageNoWrap?: boolean;
  errorMessageValues?: { [key: string]: string };
}

const Input: React.FunctionComponent<InputProps> = ({
  limitMaxDecimal,
  title,
  error,
  errorMessage,
  errorMessageNoWrap,
  errorMessageValues,
  className,
  unit,
  unitIcon,
  unitButtonClick,
  style,
  ...rest
}) => {
  const { isWhiteMode } = useAppContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { formatMessage } = useIntl();

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rest.type === "number" && typeof limitMaxDecimal === "number") {
      const value = e.target.value;
      if (!isNaN(parseFloat(value))) {
        const regExp = `^[0-9]*.?[0-9]{0,${limitMaxDecimal}}$`;
        if (!new RegExp(regExp, "g").test(e.target.value)) {
          return;
        }
      }
    }
    if (rest.onChange) return rest.onChange(e);
  };

  return (
    <InputStyle
      unit={unit}
      className="inputStyle"
      isWhiteMode={isWhiteMode}
      style={style}
    >
      {title && (
        <Label
          label={title}
          style={rest.disabled ? { opacity: 0.3 } : {}}
          isWhiteMode={isWhiteMode}
        />
      )}
      <div className="inputContainer">
        <input
          {...rest}
          ref={inputRef}
          className={`${error ? `error ${className}` : className ?? ""} ${
            className ?? ""
          }`}
          onChange={_onChange}
          id={title}
          placeholder={
            rest.placeholder
              ? formatMessage({ id: rest.placeholder })
              : undefined
          }
        />
        {error && errorMessage && (
          <p
            className="errorMessage"
            style={errorMessageNoWrap ? { whiteSpace: "nowrap" } : undefined}
          >
            <FormattedMessage id={errorMessage} values={errorMessageValues} />
          </p>
        )}

        {(unit || unitIcon) && (
          <button type="button" className="unit" onClick={unitButtonClick}>
            {unitIcon ? unitIcon : unit}
          </button>
        )}

        {error && (
          <RedCircle isWhiteMode={isWhiteMode}>
            <i className="icon-Member-System-Icon_Warning" />
          </RedCircle>
        )}
      </div>
    </InputStyle>
  );
};
const RedCircle = styled.div<{ isWhiteMode?: boolean }>`
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.Function_Error};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);

  i {
    font-size: 18px;
    &,
    &::before {
      color: ${({ isWhiteMode }) => (isWhiteMode ? "#fff" : "#000")};
    }
  }
`;

const InputStyle = styled.div<{
  unit?: string;
  unitIconUrl?: string;
  isWhiteMode?: boolean;
}>`
  .inputContainer {
    position: relative;

    input {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.Secondary_Grey_3};
      background-color: #ffffff;
      color: ${({ theme }) => theme.Secondary_Black};
      ${({ theme }) => theme.fontStyles[14]};
      padding: 8px 12px;
      &::placeholder {
        color: ${({ theme }) => theme.Secondary_Grey_2};
      }
      &:disabled {
        ${({ isWhiteMode }) => (isWhiteMode ? "opacity: 0.1;" : "")};
        ${({ isWhiteMode }) => (isWhiteMode ? " background:#F4F4F5;" : "")};
        border: 1px solid transparent;
      }

      &.error {
        border: 1px solid ${({ theme }) => theme.Function_Error};
      }
      &.h40 {
        height: 40px;
      }
    }
    .errorMessage {
      position: absolute;
      bottom: 0;
      transform: translateY(calc(100% + 5px));
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.Function_Error};
    }

    .unit,
    .toggleButton {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      right: 12px;
      font-size: 14px;
      font-weight: 400;

      i,
      i::before {
        font-size: 20px;
        color: ${({ theme }) => theme.Secondary_Black};
      }
    }
  }
`;

export default React.memo(Input);
