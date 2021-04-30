import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import Input from "../../Input";
import CreateBtn from "../../Button/CreateBtn";

import useHashGame, { EGameMode } from "hooks/useHashGame";
import useSwap from "hooks/useSwap";
import useAppContext from "hooks/useAppContext";
import { usePolkadotJS } from "@polkadot/api-provider";

const BetBlock: React.FunctionComponent<{
  room: number | string;
  canBet: number;
  createBy: string;
  countdown: number;
}> = ({ room, canBet, createBy, countdown }) => {
  const [youBetValue, setYouBetValue] = useState(0);
  const [txIsPending, setTxIsPending] = useState(false);

  const { useJoinGame } = useHashGame();
  const { mutateAsync } = useJoinGame();
  const { useGetSGPBalance } = useSwap();
  const { data: SGPBalance, isLoading: SGPisLoading } = useGetSGPBalance();
  const {
    state: { currentAccount },
  } = usePolkadotJS();
  const { showFeedBack, isWhiteMode } = useAppContext();

  const handleChangeYouBet = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(currentTarget.value);
    const balance = SGPBalance?.balance || 0;

    if (value > balance) {
      value = balance;
    }

    if (value > canBet) {
      value = canBet;
    }

    setYouBetValue(value);
  };

  const bet = (even?: boolean) => {
    mutateAsync({
      gameIndex: typeof room === "string" ? parseInt(room) : room,
      gameMode: even ? EGameMode.EVEN : EGameMode.ODD,
      value: youBetValue,
      callBack: (result) => {
        setTxIsPending(!result.status.isInBlock);
        if (result.status.isInBlock) {
          setYouBetValue(0);
          showFeedBack("Submitted");
        }
      },
    });
  };

  useEffect(() => {
    setYouBetValue(0);
  }, [currentAccount?.address]);

  return (
    <BetBlockStyle isWhiteMode={isWhiteMode}>
      <div className="gird_column_2 gap40">
        <div>
          <p className="key">
            <FormattedMessage id="youbet" />
          </p>
          <Input
            disabled={SGPisLoading}
            step="100"
            type="number"
            className="inp"
            onChange={handleChangeYouBet}
            value={youBetValue}
            onWheel={(e) => e.currentTarget.blur()}
          />
        </div>
        <div>
          <p className="key">
            <FormattedMessage id="youGet" />
          </p>
          <p className="sgpitem">
            <span className="sgpvalue">
              {youBetValue ? youBetValue * 2 : "0"}
            </span>
            &nbsp;<span>SGP</span>{" "}
          </p>
        </div>
      </div>
      <div className="gird_column_2 gap20 flex_end">
        <CreateBtn
          text="Odd"
          isSending={txIsPending}
          onClick={() => bet()}
          disabled={
            !currentAccount ||
            currentAccount.address === createBy ||
            youBetValue <= 0 ||
            countdown <= 3 ||
            youBetValue > canBet
          }
        />
        <CreateBtn
          text="Even"
          className="blue"
          isSending={txIsPending}
          onClick={() => bet(true)}
          disabled={
            !currentAccount ||
            currentAccount.address === createBy ||
            youBetValue <= 0 ||
            countdown <= 3 ||
            youBetValue > canBet
          }
        />
      </div>
    </BetBlockStyle>
  );
};

const BetBlockStyle = styled.div<{ isWhiteMode: boolean }>`
  background: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#ffffff" : theme.Dark_2};
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 20px 30px;
  margin: 30px 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 139px;
  border: 2px solid ${({ isWhiteMode }) => (isWhiteMode ? "none" : "#636672")};
  color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? theme.Secondary_Black : "#fff"};
  .gird_column_2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    button {
      height: 60px;
      ${({ theme }) => theme.fontStyles[24]}
    }
    &.gap40 {
      grid-column-gap: 40px;
    }
    &.gap20 {
      grid-column-gap: 20px;
    }
    &.flex_end {
      align-items: flex-end;
    }
    .inp {
      height: 60px;
      ${({ theme }) => theme.fontStyles[24]}
      font-weight:500;
      margin-top: 5px;
    }
    p {
      &.key {
        ${({ theme }) => theme.fontStyles[14]}
        font-weight:500;
      }
      &.sgpitem {
        display: flex;
        align-items: center;
        margin-top: 20px;
        span {
          &.sgpvalue {
            ${({ theme }) => theme.fontStyles[24]}
            font-weight:500;
          }
          &.sgpkey {
            margin-top: 3px;
            ${({ theme }) => theme.fontStyles[16]}
            font-weight:500;
          }
        }
      }
    }
  }
`;

export default BetBlock;
