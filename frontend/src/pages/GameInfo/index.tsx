import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconOutlineArrowlefttail } from "react-icon-guanfan";
import { useHistory, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useQueryClient } from "react-query";
import DescBlock from "../../components/GameInfo/DescBlock";
import BetBlock from "../../components/GameInfo/BetBlock";
import InfoBlock from "../../components/GameInfo/InfoBlock";
import BetRecordBlock from "../../components/GameInfo/BetRecordBlock";
import Congrats from "../../components/Congrats";
import ActionButton from "../../components/Button/ActionButton";

import useAppContext from "../../hooks/useAppContext";
import { useApiGetGameInfo } from "hooks/useApi/useGuessHash";
import useHashGame, { IGameResult, EGameMode } from "hooks/useHashGame";
import useSubNewBlocks from "hooks/useSubNewBlocks";
import { usePolkadotJS } from "@polkadot/api-provider";

const GameInfo = () => {
  const { isWhiteMode } = useAppContext();

  const [congratsShow, setCongratsShow] = useState(false);
  const [gameResult, setGameResult] = useState<IGameResult | null>(null);
  const [userReward, setUserReward] = useState(0);

  const history = useHistory();
  const { room } = useParams<{ room: string }>();
  const { data } = useApiGetGameInfo(parseInt(room), !isNaN(parseInt(room)));
  const { waitGameResult } = useHashGame();
  const { currentBlockNumber } = useSubNewBlocks(false, true);
  const {
    state: { currentAccount, api, apiState },
  } = usePolkadotJS();
  const queryClient = useQueryClient();

  const isBookMaker =
    currentAccount?.address === data?.data.data?.gameInfo.gameCreateBy;
  const isPlayer = data?.data.data?.betRecord.some(
    (item) => item.address === currentAccount?.address
  );

  useEffect(() => {
    if (!isNaN(parseInt(room)) && api && apiState === "READY") {
      waitGameResult(parseInt(room))
        .then((r) => {
          setGameResult(r);
          setCongratsShow(true);
          queryClient.invalidateQueries(["gameInfo", room]);
        })
        .catch(console.error);
    }
  }, [room, waitGameResult, queryClient, api, apiState]);

  useEffect(() => {
    if (data?.data.data && currentAccount && gameResult) {
      if (currentAccount.address === data.data.data.gameInfo.gameCreateBy) {
        const allOddAmount = data.data.data.betRecord
          .filter((i) => i.oddEven === "Odd")
          .reduce<number>((a, i) => a + parseInt(i.bet), 0);

        const allEvenAmount = data.data.data.betRecord
          .filter((i) => i.oddEven === "Even")
          .reduce<number>((a, i) => a + parseInt(i.bet), 0);

        if (gameResult.gameResult === EGameMode.ODD) {
          const amount = allEvenAmount - allOddAmount;
          setUserReward(amount <= 0 ? 0 : amount);
        } else {
          const amount = allOddAmount - allEvenAmount;

          setUserReward(amount <= 0 ? 0 : amount);
        }
      } else {
        setUserReward(
          data.data.data.betRecord
            .filter(
              (item) =>
                item.address === currentAccount?.address &&
                EGameMode[gameResult.gameResult] ===
                  item.oddEven.toLocaleUpperCase()
            )
            .reduce<number>((acc, item) => {
              return acc + parseFloat(item.bet);
            }, 0) * 2
        );
      }
    }
  }, [data?.data.data, currentAccount, gameResult]);

  return (
    <GameInfoStyle className="wrap" isWhiteMode={isWhiteMode}>
      <div className="top">
        <ActionButton
          onClick={history.goBack}
          icon={<IconOutlineArrowlefttail />}
        />
        <img src="./images/guessHash.svg" alt="guessHash" />
        <div>
          <div className="aligncenter">
            <p>
              <FormattedMessage id="GuessHash" />
            </p>
            <div className="line"></div>
            <p>
              <FormattedMessage id="Room" />#{data?.data.data?.gameInfo.room}
            </p>
          </div>
          <div className="gird_column2 gap20 mt18">
            <div className="gird_column2 gap10">
              <p>
                <FormattedMessage id="blockID" />
              </p>
              <p>{data?.data.data?.gameInfo.blockId}</p>
            </div>
            <div className="gird_column2 gap10">
              <p>
                <FormattedMessage id="betLimit" />
              </p>
              <p>{data?.data.data?.gameInfo.betLimit}</p>
            </div>
          </div>
        </div>
      </div>
      <DescBlock
        gameResult={gameResult}
        blockId={parseFloat(data?.data.data?.gameInfo.blockId || "0")}
        blockCount={
          data?.data.data
            ? parseInt(data.data.data.gameInfo.blockId) - currentBlockNumber
            : 0
        }
      />

      {!gameResult && data?.data.data?.gameInfo.status === "1" && !isBookMaker && (
        <div className="container_2">
          <BetBlock
            room={room}
            createBy={data.data.data.gameInfo.gameCreateBy}
            canBet={
              parseFloat(data.data.data.gameInfo.betLimit) -
              parseFloat(data.data.data.gameInfo.totalBet)
            }
            countdown={
              data?.data.data
                ? parseInt(data.data.data.gameInfo.blockId) - currentBlockNumber
                : 0
            }
          />
        </div>
      )}
      <div className="bottom_gird_column2">
        {data?.data.data && (
          <>
            <InfoBlock
              gameInfo={data?.data.data.gameInfo}
              isBookMaker={isBookMaker}
            />
            <BetRecordBlock betRecord={data?.data.data.betRecord} />
          </>
        )}
      </div>
      {congratsShow && (isPlayer || isBookMaker) && (
        <Congrats
          setCongratsShow={setCongratsShow}
          youGet={userReward}
          isBookMaker={isBookMaker}
          hash={gameResult?.hash || ""}
        />
      )}
    </GameInfoStyle>
  );
};
const GameInfoStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 40px 130px 100px;
  .d_flex {
    display: flex;
    align-items: center;
    width: 400px;
  }
  .top {
    display: grid;
    grid-template-columns: 40px 87px 1fr;
    grid-column-gap: 30px;
    padding-bottom: 35px;
    border-bottom: 1px solid
      ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
    img {
      width: 100%;
      height: 80px;
      border-radius: 10px;
    }
    .aligncenter {
      display: flex;
      align-items: center;
      ${({ theme }) => theme.fontStyles[24]};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
      font-weight: 500;
      .line {
        height: 20px;
        width: 1px;
        margin: 0 20px;
        background-color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
      }
    }
    .gird_column2 {
      display: grid;
      ${({ theme }) => theme.fontStyles[14]};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_1 : theme.Secondary_Grey_2};
      &.mt18 {
        margin-top: 18px;
      }
      &.gap20 {
        grid-column-gap: 20px;
        grid-template-columns: 170px 170px;
      }
      &.gap10 {
        grid-column-gap: 10px;
        grid-template-columns: 70px 90px;
      }
    }
  }
  .container_2 {
    padding: 0 80px;
  }
  .container {
    padding: 40px 80px 0;
    .descBlock {
      p {
        ${({ theme }) => theme.fontStyles[18]};
        color: ${({ theme }) => theme.Secondary_Black};
        &.gray60 {
          ${({ theme }) => theme.fontStyles[60]};
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
          font-weight: 500;
          letter-spacing: 0.15em;
          &.haveResult {
            color: ${({ theme, isWhiteMode }) =>
              isWhiteMode ? theme.Secondary_Black : "#fff"};
          }
        }
        &.pink {
          color: ${({ theme }) => theme.Primary_1};
          ${({ theme }) => theme.fontStyles[16]};
          padding-top: 30px;
        }
        &.text {
          width: 283px;
          word-break: break-all;
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : "#FFF"};
        }
      }
      .question {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        ${({ theme }) => theme.fontStyles[60]};
        color: #fff;
        font-weight: bold;
        text-align: center;
        &.blueBg {
          background-color: ${({ theme }) => theme.Function_complete};
        }
        &.pinkBg {
          background-color: ${({ theme }) => theme.Primary_1};
        }
      }
      .scanBtn {
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        justify-content: flex-end;
        color: ${({ theme }) => theme.Primary_1};
        .pink {
          ${({ theme }) => theme.fontStyles[16]};
        }
      }
      .flex_between {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .bottom_gird_column2 {
    justify-content: center;
    display: grid;
    grid-template-columns: 350px 556px;
    grid-column-gap: 40px;
    margin-top: 40px;
  }
`;
export default GameInfo;
