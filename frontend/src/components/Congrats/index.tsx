import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { IconOutlineLightOut } from "react-icon-guanfan";
import { useHistory } from "react-router-dom";

import Button from "../Button";
import Modal from "../Modal";

import { formatNumber } from "utils/format";
interface Props {
  isBookMaker?: boolean;
  youGet?: number;
  setCongratsShow: (arg: boolean) => void;
  hash: string;
}

const Congrats = ({
  youGet = 0,
  setCongratsShow,
  isBookMaker,
  hash,
}: Props) => {
  const { push } = useHistory();
  return (
    <Modal>
      <CongrateStyle>
        <p className="title">
          <FormattedMessage id="congrats" />
        </p>
        <p className="secondtitle">
          <FormattedMessage id="congrats_youGet" />
        </p>
        <p className="yougetValue">{formatNumber(youGet)}</p>
        <p className="unit">SGP</p>

        <a
          href={`http://subgamenode.subgame.org:8080/#/explorer/query/${hash}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="scanBtn">
            <p className="pink">
              <FormattedMessage id="ViewinPolkscan" />
            </p>
            <IconOutlineLightOut />
          </div>
        </a>

        <Button
          text="seeHistory"
          className="secondary"
          onClick={() => {
            push(`/gamehash?tab=1${!isBookMaker ? "&his=1" : ""}`);
          }}
        />
        <Button
          text="ok"
          className="third"
          onClick={() => {
            setCongratsShow(false);
          }}
        />
      </CongrateStyle>
    </Modal>
  );
};

const CongrateStyle = styled.div`
  background: rgba(255, 255, 255);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 20px;
  width: 360px;
  min-height: 513px;
  p {
    text-align: center;
  }
  .title {
    ${({ theme }) => theme.fontStyles[16]};
    font-weight: 500;
  }
  .secondtitle {
    ${({ theme }) => theme.fontStyles[24]};
    font-weight: 500;
    margin-top: 60px;
  }
  .yougetValue {
    ${({ theme }) => theme.fontStyles[60]};
    font-weight: 500;
    margin-top: 5px;
    word-break: break-all;
  }
  .unit {
    margin-top: 5px;
    ${({ theme }) => theme.fontStyles[18]};
  }
  .scanBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.Primary_1};
    .pink {
      ${({ theme }) => theme.fontStyles[14]};
    }
  }
  .secondary {
    margin-top: 60px;
  }
  .third {
    margin-top: 20px;
  }
`;

export default Congrats;
