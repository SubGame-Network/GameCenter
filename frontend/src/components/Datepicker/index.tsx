import React, { useState } from "react";
import ReactDatepicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import isBefore from "date-fns/isBefore";

import Button from "../Button";
import DatePickerCustomInput from "./DatePickerCustomInput";
import useAppContext from "../../hooks/useAppContext";

interface DatePickerProps {
  customWidth?: string;
  toLeft?: boolean;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  useFullTime?: boolean;
  clearButton?: boolean;
  popperPlacement?:
    | "auto"
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left"
    | "left-end"
    | "left-start"
    | "right"
    | "right-end"
    | "right-start"
    | "top"
    | "top-end"
    | "top-start";
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  customWidth = "100%",
  toLeft = true,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  useFullTime,
  popperPlacement,
  clearButton,
}) => {
  const { isWhiteMode } = useAppContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const [innerStartDate, setInnerStartDate] = useState<Date | null>(startDate);
  const [innerEndDate, setInnerEndDate] = useState<Date | null>(endDate);

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setInnerStartDate(start);
    setInnerEndDate(end);
  };

  const done = () => {
    setMenuOpen(false);
    setStartDate(innerStartDate);
    setEndDate(innerEndDate);
  };

  return (
    <CustomStyle
      toLeft={toLeft}
      customWidth={customWidth}
      isWhiteMode={isWhiteMode}
    >
      <ReactDatepicker
        selected={innerStartDate}
        onChange={onChange}
        startDate={innerStartDate}
        endDate={innerEndDate}
        monthsShown={2}
        selectsRange
        open={menuOpen}
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        calendarClassName="customCalendar"
        popperPlacement={popperPlacement}
        customInput={
          <DatePickerCustomInput
            setMenuOpen={setMenuOpen}
            useFullTime={useFullTime}
            startDate={startDate}
            endDate={endDate || new Date()}
            isWhiteMode={isWhiteMode}
          />
        }
        maxDate={new Date()}
      >
        <Child></Child>
        <Child>
          {clearButton ? (
            <Button
              text="clear"
              className="third btn"
              onClick={() => {
                setMenuOpen(false);
                setStartDate(null);
                setEndDate(null);
                setInnerStartDate(null);
                setInnerEndDate(null);
              }}
            />
          ) : (
            <div />
          )}

          <Button
            className="secondary btn"
            disabled={isBefore(new Date(), innerStartDate as Date)}
            text="done"
            onClick={done}
          />
        </Child>
      </ReactDatepicker>
    </CustomStyle>
  );
};
const CustomStyle = styled.div<{
  toLeft: boolean;
  customWidth: string;
  isWhiteMode: boolean;
}>`
  .btn {
    width: 90px !important;
    height: 44px !important;
    &.secondary {
      background: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      border: 1px solid
        ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      &:hover:enabled {
        background: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
        border: 1px solid
          ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      }
      &:disabled {
        color: ${({ isWhiteMode, theme }) =>
          isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
        background-color: ${({ isWhiteMode, theme }) =>
          isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};
        border: none;
      }
    }
    &.third {
      background: transparent;
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      border: 1px solid
        ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      &:hover:enabled {
        background: transparent;
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
        border: 1px solid
          ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : theme.Primary_1};
      }
    }
  }
  .react-datepicker-wrapper {
    width: ${({ customWidth }) => {
      return customWidth;
    }};
  }
  .react-datepicker__month-container {
    margin-bottom: 0px;
  }
  .react-datepicker-popper {
    z-index: 2;
    left: ${({ toLeft }) => {
      return toLeft ? "-350px !important" : "0";
    }};
    .customCalendar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 45px;
      border: none;
      background: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? "#FFF" : theme.Dark_3};
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      padding: 10px 17px 10px 20px;

      .react-datepicker__navigation {
        &.react-datepicker__navigation--previous {
          width: 24px;
          height: 24px;
          margin: 0;
          border: none;
          background-image: ${({ isWhiteMode }) =>
            isWhiteMode
              ? "url(/images/arrowLeft.svg)"
              : "url(/images/arrowLeft_white.svg)"};
        }
        &.react-datepicker__navigation--next {
          width: 24px;
          height: 24px;
          margin: 0;
          border: none;
          background-image: ${({ isWhiteMode }) =>
            isWhiteMode
              ? "url(/images/arrowRight.svg)"
              : "url(/images/arrowRight_white.svg)"};
        }
      }

      .react-datepicker__header {
        background-color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? "#FFF" : theme.Dark_3};
        border: none;
        padding: 0;
        .react-datepicker__current-month {
          font-weight: normal;
          font-size: 14px;
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : "#FFF"};
          margin-bottom: 10px;
          height: 24px;
          line-height: 24px;
        }
        .react-datepicker__day-names {
          display: grid;
          grid-template-columns: repeat(7, 30px);
          grid-column-gap: 15px;
          .react-datepicker__day-name {
            margin: 0;
            width: 30px;
            height: 30px;
            line-height: 30px;
            color: ${({ isWhiteMode }) => (isWhiteMode ? "#ABAAAA" : "#FFF")};
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
      .react-datepicker__day {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 80px;
        color: ${({ isWhiteMode, theme }) =>
          isWhiteMode ? theme.Secondary_Black : "#FFF"};
        outline: none;
        display: block;
        margin: 0;
        &.react-datepicker__day--keyboard-selected {
          background: ${({ theme }) => theme.Primary_1};
        }
        &.react-datepicker__day--in-range,
        &.react-datepicker__day--in-selecting-range {
          background: ${({ isWhiteMode, theme }) =>
            isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};
        }
        &.react-datepicker__day--range-start,
        &.react-datepicker__day--in-selecting-range-start,
        &.react-datepicker__day--selected {
          background: ${({ theme }) => theme.Primary_1};
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : "#FFF"};
        }
        &.react-datepicker__day--range-end,
        &.react-datepicker__day--in-selecting-range-end {
          background: ${({ theme }) => theme.Primary_1};
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : "#FFF"};
        }
        &.react-datepicker__day--outside-month,
        &.react-datepicker__day--disabled {
          background: transparent;
          cursor: default;
          opacity: 0.2;
        }
      }
      .react-datepicker__month {
        display: grid;
        grid-template-rows: repeat(6, 30px);
        row-gap: 5px;
        margin: 0;
        .react-datepicker__week {
          display: grid;
          grid-template-columns: repeat(7, 30px);
          grid-column-gap: 15px;
        }
      }
    }
  }
`;

const Child = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 90px);
  grid-column-gap: 10px;
  justify-content: flex-end;
`;

export default DatePicker;
