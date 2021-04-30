import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { gameInfo } from "../../../api/types/GameInfo";
import { IconTwotonePlus, IconOutlineTime } from "react-icon-guanfan";
import useAppContext from "hooks/useAppContext";
import { formatTime } from "utils/format";
import { renderAddress } from "../../Table/Cell";
interface Props {
  gameInfo: gameInfo;
  isBookMaker: boolean;
}

const InfoBlock = ({ gameInfo, isBookMaker }: Props) => {
  const { isWhiteMode, showFeedBack } = useAppContext();
  const handleCopy = (address: string) => {
    const copyinput = document.createElement("input");
    showFeedBack("Copied", "Copied");
    if (address && copyinput) {
      copyinput.value = address;
      document.body.appendChild(copyinput);
      copyinput.select();
      copyinput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(copyinput);
    }
  };
  return (
    <InfoBlockStyle isWhiteMode={isWhiteMode}>
      <div className="title">
        <FormattedMessage id="gameInfo" />
      </div>
      <div className="box">
        <div className="flex_between key">
          <p>
            <FormattedMessage id="TotalBet" />
          </p>
          <p>
            <FormattedMessage id="BetLimit" />
          </p>
        </div>

        <div className="gird_column_3 value">
          <p>{gameInfo.totalBet}</p>
          <p className="line">/</p>
          <p className="textRight">{gameInfo.betLimit}</p>
        </div>
        <div className="createInfoBox mt26">
          <IconTwotonePlus />
          <div>
            <p>
              <FormattedMessage id="Gamecreateby" />
            </p>
            <p
              className="gameCreateBy"
              onClick={() => {
                handleCopy(gameInfo.gameCreateBy);
              }}
            >
              {renderAddress(gameInfo.gameCreateBy || "-", "45px", "-120px")}{" "}
              {isBookMaker ? <span>(YOU)</span> : ""}
            </p>
          </div>
        </div>
        <div className="createInfoBox">
          <IconOutlineTime />
          <div>
            <p>
              <FormattedMessage id="createTime" />
            </p>
            <p>{formatTime(gameInfo.gameCreateTrime)}</p>
          </div>
        </div>
      </div>
    </InfoBlockStyle>
  );
};

const InfoBlockStyle = styled.div<{ isWhiteMode: boolean }>`
  color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? theme.Secondary_Black : "#FFF"};
  .title {
    ${({ theme }) => theme.fontStyles[16]};
    font-weight: 500;
  }
  .box {
    border: ${({ isWhiteMode }) =>
      isWhiteMode ? "1px solid #e8e8e8" : "none"};
    box-sizing: border-box;
    border-radius: 3px;
    padding: 40px 25px 30px;
    background-color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? "#FFF" : theme.Dark_2};
    .flex_between {
      display: flex;
      justify-content: space-between;
    }
    .gird_column_3 {
      display: grid;
      grid-template-columns: 1fr 20px 1fr;
      grid-column-gap: 5px;

      &.value {
        margin: 10px 0 0;
        p {
          ${({ theme }) => theme.fontStyles[36]};
          font-weight: 500;
          letter-spacing: 0;
          word-break: break-all;
          &.line {
            color: ${({ theme, isWhiteMode }) =>
              isWhiteMode ? theme.Secondary_Grey_2 : "#FFF"};
          }
          &.textRight {
            text-align: right;
          }
        }
      }
    }
    p {
      ${({ theme }) => theme.fontStyles[12]};
      font-weight: 500;
    }
  }
  .createInfoBox {
    margin-top: 10px;
    padding: 10px 14px;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 10px;
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_1};
    align-items: center;
    word-break: break-all;
    svg {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
    }
    &.mt26 {
      margin-top: 26px;
    }
    .gameCreateBy span {
      color: #eb027d;
    }
  }
`;

export default InfoBlock;
