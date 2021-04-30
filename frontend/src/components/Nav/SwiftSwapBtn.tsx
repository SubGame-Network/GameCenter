import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { IconSharpExchange } from "react-icon-guanfan";
import DropDown from "../DropDown";
import Button from "../Button";
import Input from "../Input";

import useSwap from "hooks/useSwap";
import useTokenBalance from "hooks/useTokenBalance";
import useAppContext from "hooks/useAppContext";
import { usePolkadotJS } from "@polkadot/api-provider";

const SwiftSwapBtn = () => {
  const [useSGB, setUseSGB] = useState(true);
  const [switchValue, setSwitchValue] = useState(0);
  const [txIsPenging, setTxIsPenging] = useState(false);

  const { showFeedBack, isWhiteMode } = useAppContext();
  const { useGetSGPBalance, useSwapSGB, useSwapSGP } = useSwap();
  const {
    state: { currentAccount, chainToken },
  } = usePolkadotJS();
  const Balances = useTokenBalance();
  const SGBBalance = currentAccount?.address
    ? Balances[currentAccount.address]
    : 0;
  const { data: SGPBalance } = useGetSGPBalance();
  const { mutateAsync: swapSGB, isLoading: swapSGBisLoading } = useSwapSGB();
  const { mutateAsync: swapSGP, isLoading: swapSGPisLoading } = useSwapSGP();
  const currentBalance = useSGB
    ? parseFloat(SGBBalance?.toFixed(4))
    : parseInt(SGPBalance?.balance.toFixed(0) || "0");

  const switchCurrency = () => {
    setUseSGB(!useSGB);
  };

  const changeSwitchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const max = Math.floor(parseInt(currentBalance.toString()));

    if (useSGB && currentBalance - value < 1) {
      setSwitchValue(max - 1);
      return;
    }

    setSwitchValue(value > currentBalance ? max : value);
  };

  useEffect(() => {
    setSwitchValue(0);
  }, [useSGB]);

  return (
    <DropDown targetClass="swiftSwapPop">
      <SwiftSwapBtnStyle isWhiteMode={isWhiteMode}>
        <FormattedMessage id="swiftswap" />
      </SwiftSwapBtnStyle>

      <SwifSwapPop className="swiftSwapPop">
        <p className="title">
          <FormattedMessage id="swiftswap" />
        </p>
        <div className="flex_between">
          <p>
            {useSGB ? chainToken : "SGP"}&nbsp;
            <FormattedMessage id="balance" />
          </p>
          <p>{currentBalance || 0}</p>
        </div>
        <Input
          unit={useSGB ? chainToken : "SGP"}
          placeholder="Amount"
          style={{ marginTop: "10px" }}
          type="number"
          value={switchValue}
          onChange={changeSwitchValue}
        />
        <div className="Switch" onClick={switchCurrency}>
          <IconSharpExchange size={20} />
          <FormattedMessage id="Switch" />
        </div>
        <Input
          unit={useSGB ? "SGP" : chainToken}
          placeholder="Amount"
          style={{ marginTop: "10px" }}
          type="number"
          value={switchValue}
          onChange={changeSwitchValue}
        />
        <Button
          text="Submit"
          className="secondary mt40"
          isSending={swapSGBisLoading || swapSGPisLoading}
          disabled={
            switchValue <= 0 || txIsPenging || currentBalance < switchValue
          }
          onClick={() => {
            if (useSGB) {
              swapSGP({
                amount: switchValue,
                callBack: (result) => {
                  setTxIsPenging(!result.status.isInBlock);
                  if (result.status.isInBlock) {
                    showFeedBack("Submitted");
                  }
                },
              });
            } else {
              swapSGB({
                amount: switchValue,
                callBack: (result) => {
                  setTxIsPenging(!result.status.isInBlock);
                  if (result.status.isInBlock) {
                    showFeedBack("Submitted");
                  }
                },
              });
            }
          }}
        />
      </SwifSwapPop>
    </DropDown>
  );
};

const SwiftSwapBtnStyle = styled.div<{ isWhiteMode: boolean }>`
  width: auto;
  height: 44px;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_3};
  ${({ theme }) => theme.fontStyles[16]};
  :hover {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Primary_1};
  }
`;
const SwifSwapPop = styled.div`
  width: 360px;
  position: absolute;
  top: 60px;
  right: 0;
  padding: 20px;
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  background-color: #fff;
  display: none;
  z-index: 100;
  .title {
    text-align: center;
    ${({ theme }) => theme.fontStyles[16]};
    font-weight: 500;
    color: ${({ theme }) => theme.Secondary_Black};
    margin-bottom: 20px;
  }
  .flex_between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.Secondary_Black};
  }
  .Switch {
    color: ${({ theme }) => theme.Secondary_Black};
    ${({ theme }) => theme.fontStyles[12]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 20px;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.Primary_1};
    }
  }
  .mt40 {
    margin-top: 40px;
  }
  &.open {
    display: block;
  }
`;

export default SwiftSwapBtn;
