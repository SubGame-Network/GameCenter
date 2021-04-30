import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { IconOutlineCheck } from "react-icon-guanfan";
import useAppContext from "../../hooks/useAppContext";

export type TType = "Submitted" | "Failed" | "Copied";
export type TMessage = string;
export type TMessageValues = { [key: string]: string | number };

export interface IFeedBackData {
  type: TType;
  message?: TMessage;
  messageValues?: TMessageValues;
}

interface IFeedBackProps extends IFeedBackData {
  delay?: number;
}

interface Props extends IFeedBackProps {
  setFeedbackShow: (a: boolean) => void;
}

const Feedback = ({
  message,
  type,
  setFeedbackShow,
  messageValues,
  delay = 3500,
}: Props) => {
  const { isWhiteMode } = useAppContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const types = {
    Submitted: <IconOutlineCheck fontSize={10} color="#FFF" />,
    Failed: <></>,
    Copied: <IconOutlineCheck fontSize={10} color="#FFF" />,
  };
  useEffect(() => {
    let outTimeID: number, timeID: number;

    if (ref.current) {
      setTimeout(() => {
        if (ref.current) ref.current.classList.add("active");
      }, 0);
    }

    outTimeID = window.setTimeout(() => {
      if (ref.current) ref.current.classList.remove("active");
    }, delay);

    timeID = window.setTimeout(() => {
      setFeedbackShow(false);
    }, delay + 500);

    return () => {
      clearTimeout(timeID);
      clearTimeout(outTimeID);
    };
  }, [setFeedbackShow, delay]);

  return (
    <Body ref={ref} className={type} isWhiteMode={isWhiteMode}>
      <figure>{types[type]}</figure>
      <Right>
        <p className="content">
          {message ? (
            <FormattedMessage id={message} values={messageValues} />
          ) : (
            <FormattedMessage
              id={
                type === "Submitted" ? "Feedback_Submitted" : "Feedback_Failed"
              }
            />
          )}
        </p>
      </Right>
    </Body>
  );
};

const Body = styled.div<{ isWhiteMode?: boolean }>`
  background: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Dark_3};
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  min-width: 240px;
  z-index: 999;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#FFF"};
  height: 50px;
  figure {
    margin-right: 12px;
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Function_complete};
    border-radius: 50%;
  }

  &.active {
    top: 30px;
    transform: translate(-50%, 0%);
  }

  &.Failed {
    color: ${({ theme }) => theme.Function_Error};
  }
`;

const Right = styled.div`
  .title {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3c3c40;
    font-weight: 700;
    font-size: 14px;
  }
`;

export default Feedback;
