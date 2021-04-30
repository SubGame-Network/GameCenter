import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../../hooks/useAppContext";
import makeid from "utils/makeid";
import { IGameResult, EGameMode } from "hooks/useHashGame";
import { IconOutlineLightOut } from "react-icon-guanfan";
interface Props {
  gameResult: IGameResult | null;
  blockId: number;
  blockCount: number;
}

const DescBlock = ({ gameResult, blockId, blockCount }: Props) => {
  const [randomNum, setRandomNum] = useState("?");
  const [randomColor, setRandomColor] = useState("blue");
  const [randomHash, setRandomHash] = useState(makeid(64));
  const { isWhiteMode } = useAppContext();

  const randomNumTimer = useRef<number | null>(null);
  const randomHashTimer = useRef<number | null>(null);
  const getLastHashString = (hash: string, charIndex: number) => {
    const length = hash.length;
    const gapLength = length - charIndex;

    if (gapLength < 6) {
      return hash.slice(length - 6, length);
    } else {
      return hash.slice(charIndex, length);
    }
  };
  useEffect(() => {
    const randomAry: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "?",
    ];
    const randomColorAry = ["blue", "pink"];

    const timeout: any = setInterval(() => {
      setRandomNum(randomAry[Math.floor(Math.random() * 11)]);
      setRandomColor(randomColorAry[Math.floor(Math.random() * 2)]);
    }, 500);
    randomNumTimer.current = timeout;
    return () => {
      clearInterval(timeout);
    };
  }, []);
  useEffect(() => {
    const timer: any = setInterval(() => {
      setRandomHash(makeid(64));
    }, 500);
    randomHashTimer.current = timer;
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (gameResult && randomNumTimer.current && randomHashTimer.current) {
      clearInterval(randomNumTimer.current);
      clearInterval(randomHashTimer.current);
    }
  }, [gameResult]);

  return (
    <DescBlockStyle isWhiteMode={isWhiteMode}>
      <div className="descBlock">
        <p className={gameResult ? "gray60 haveResult" : "gray60"}>
          {(gameResult ? gameResult.hash : randomHash).slice(0, 19)}
          ...
        </p>
        <div className="flex_between">
          <div className="d_flex">
            <p className={gameResult ? "gray60 haveResult" : "gray60"}>
              {getLastHashString(
                gameResult ? gameResult.hash : randomHash,
                gameResult?.charIndex || randomHash.length
              )
                .split("")
                .map((v, index, arr) => {
                  const charIndex = arr.lastIndexOf(
                    gameResult
                      ? gameResult.lastNumber.toString()
                      : randomHash[randomHash.length]
                  );
                  return (
                    <span
                      key={index}
                      style={{ display: "inline-block" }}
                      className={index === charIndex ? "blueBg question" : ""}
                    >
                      {v}
                    </span>
                  );
                })}
            </p>
            {!gameResult && (
              <p
                className={
                  randomColor === "blue" ? "blueBg question" : "pinkBg question"
                }
              >
                {randomNum}
              </p>
            )}
          </div>
          {gameResult ? (
            <>
              <p className="text">
                <FormattedMessage
                  id="hashResult"
                  values={{
                    blockID: blockId,
                    result: EGameMode[gameResult?.gameResult || 1],
                  }}
                />
              </p>
              <a
                href={`http://subgamenode.subgame.org:8080/#/explorer/query/${gameResult.hash}`}
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
            </>
          ) : (
            <>
              <p className="text">
                <FormattedMessage id="guessnumber" values={{ br: <br /> }} />
              </p>{" "}
              <p className="pink">
                <FormattedMessage
                  id="countBlock"
                  values={{
                    blockCount: blockCount,
                  }}
                />
              </p>
            </>
          )}
        </div>
      </div>
    </DescBlockStyle>
  );
};

const DescBlockStyle = styled.div<{ isWhiteMode: boolean }>`
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
`;

export default DescBlock;
