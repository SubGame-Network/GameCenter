import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { betRecord } from "../../../api/types/GameInfo";
import { formatTime } from "utils/format";
import sliceAddress from "utils/sliceAddress";

import { usePolkadotJS } from "@polkadot/api-provider";
import useAppContext from "../../../hooks/useAppContext";
import { renderAddress } from "../../Table/Cell";

interface Props {
  betRecord: betRecord[];
}

const BetRecordBlock = ({ betRecord }: Props) => {
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
  const {
    state: { currentAccount },
  } = usePolkadotJS();

  return (
    <BetRecordBlockStyle isWhiteMode={isWhiteMode}>
      <div className="title">
        <FormattedMessage id="betRecord" />
      </div>
      {betRecord.length > 0 ? (
        <div className="list">
          {betRecord
            .filter((item) => item.address === currentAccount?.address)
            .concat(
              betRecord.filter(
                (item) => item.address !== currentAccount?.address
              )
            )
            .map((record) => {
              return (
                <div
                  key={record.time.concat(record.address)}
                  className={
                    currentAccount?.address === record.address
                      ? "record isAcountAddress"
                      : "record"
                  }
                >
                  <p
                    onClick={() => {
                      handleCopy(record.address);
                    }}
                  >
                    {renderAddress(
                      sliceAddress(record.address),
                      "20px",
                      "-70px"
                    )}
                    <span className="you">
                      {currentAccount?.address === record.address
                        ? " (YOU)"
                        : ""}
                    </span>
                  </p>
                  <p>{record.oddEven}</p>
                  <p className="bet">Bet&nbsp;{record.bet}</p>
                  <p className="time"> {formatTime(record.time)}</p>
                </div>
              );
            })}
        </div>
      ) : (
        <p className="noBetYet">
          <FormattedMessage id="noBetYet" />
        </p>
      )}
    </BetRecordBlockStyle>
  );
};

const BetRecordBlockStyle = styled.div<{ isWhiteMode: boolean }>`
  .noBetYet {
    padding-top: 50px;
    text-align: center;
    ${({ theme }) => theme.fontStyles[14]}
    color:  ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_2}
  }
  .title {
    ${({ theme }) => theme.fontStyles[16]};
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};
    font-weight: 500;
  }
  .list {
    padding: 10px 5px 0 10px;
    overflow-y: auto;
    height: 300px;
    width: 100%;
    .record {
      padding: 10px 16px;
      display: grid;
      height: 50px;
      grid-template-columns: 215px 34px 120px 80px;
      grid-column-gap: 20px;
      align-items: center;
      background: ${({ isWhiteMode, theme }) =>
        isWhiteMode ? "rgba(232, 232, 232, 0.5)" : theme.Dark_2};
      border-radius: 3px;
      margin-bottom: 5px;
      p {
        font-size: 12px;
        font-weight: 500;
        color: ${({ isWhiteMode, theme }) =>
          isWhiteMode ? theme.Secondary_Black : "#fff"};
        &.bet {
          text-align: center;
        }
        &.time {
          color: ${({ isWhiteMode, theme }) =>
            isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
        }
      }
      span.you {
        color: #eb027d;
      }
      &.isAcountAddress {
        background: ${({ isWhiteMode, theme }) =>
          isWhiteMode ? "rgba(185, 185, 185, 0.5)" : theme.Dark_3};
      }
    }
  }
`;

export default BetRecordBlock;
