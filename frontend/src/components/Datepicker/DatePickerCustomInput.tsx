import React from "react";
// import "react-datepicker/dist/react-datepicker.css";
import { IconOutlineCalendarweek } from "react-icon-guanfan";
import format from "date-fns/format";
import styled from "styled-components";

interface DatePickerCustomInputProps {
  setMenuOpen: (a: boolean) => void;
  startDate: Date | null;
  useFullTime?: boolean;
  endDate?: Date | null;
  isWhiteMode: boolean;
}

class DatePickerCustomInput extends React.Component<DatePickerCustomInputProps> {
  render() {
    const tmpStartDate = this.props.startDate
      ? format(
          new Date(this.props.startDate),
          `yyyy-MM-dd ${this.props.useFullTime ? "HH:mm" : ""}`
        )
      : "";
    const tmpEndDate = this.props.endDate
      ? "~" +
        format(
          new Date(this.props.endDate),
          `yyyy-MM-dd ${this.props.useFullTime ? "HH:mm" : ""}`
        )
      : "";

    const time = tmpStartDate + tmpEndDate;
    return (
      <InputStyle className="inputStyle" isWhiteMode={this.props.isWhiteMode}>
        <div className="inputContainer">
          <input
            onClick={() => {
              this.props.setMenuOpen(true);
            }}
            type="text"
            value={time}
          />

          <button
            type="button"
            className="unit"
            onClick={() => {
              this.props.setMenuOpen(true);
            }}
          >
            <IconOutlineCalendarweek size={20} />
          </button>
        </div>
      </InputStyle>
    );
  }

  /* pawn behaviors */
}
const InputStyle = styled.div<{
  unit?: string;
  unitIconUrl?: string;
  isWhiteMode?: boolean;
}>`
  .inputContainer {
    position: relative;

    input {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid
        ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
      background-color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? "#FFF" : theme.Dark_3};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
      ${({ theme }) => theme.fontStyles[14]}
      padding: 8px 12px;
      &::placeholder {
        color: ${({ theme }) => theme.Secondary_Grey_2};
      }
    }
    .unit,
    .toggleButton {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      right: 12px;
      font-size: 20px;
      font-weight: 400;

      svg {
        fill: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : "#FFF"};
      }
    }
  }
`;
export default DatePickerCustomInput;
