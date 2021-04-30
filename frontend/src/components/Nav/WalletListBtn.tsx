import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { IconOutlineLightWallet, IconOutlineCopy } from "react-icon-guanfan";
import useAppContext from "../../hooks/useAppContext";

import { usePolkadotJS } from "@polkadot/api-provider";
import sliceAddress from "utils/sliceAddress";

const WalletListBtn = () => {
  const { showFeedBack, isWhiteMode } = useAppContext();
  const [walletMenuShow, setWalletMenuShow] = useState(false);
  const {
    state: { keyring, keyringState, currentAccount },
    changeAccount,
    connectToWallet,
  } = usePolkadotJS();

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

  const walletList = useMemo(() => {
    if (keyringState === "READY" && keyring) {
      return keyring.getAccounts();
    }
    return [];
  }, [keyring, keyringState]);

  return (
    <WalletListBtnStyle
      isWhiteMode={isWhiteMode}
      onClick={() => {
        setWalletMenuShow(!walletMenuShow);
      }}
    >
      <div className="pr5">
        <IconOutlineLightWallet size={20} />
      </div>
      <div className="address fw400">
        {currentAccount ? (
          sliceAddress(currentAccount?.address, 6, 4)
        ) : (
          <button type="button" className="font16" onClick={connectToWallet}>
            <FormattedMessage id="ConnectaWallet" />
          </button>
        )}
      </div>
      {walletMenuShow && (
        <ListMenu className="walletListMenu">
          {walletList.map((item, index) => {
            return (
              <li
                key={item.address}
                onClick={(e) => {
                  e.stopPropagation();
                  changeAccount(item);
                  setWalletMenuShow(false);
                }}
                className={
                  currentAccount?.address === item.address ? "active" : ""
                }
              >
                <p className="name">{item?.meta?.name}</p>
                {currentAccount?.address === item.address ? (
                  <p className="Selected">
                    <FormattedMessage id="Selected" />
                  </p>
                ) : (
                  <div></div>
                )}

                <p className="address">{sliceAddress(item?.address)}</p>
                <p
                  className="textRight"
                  onClick={() => {
                    handleCopy(item.address);
                  }}
                >
                  <IconOutlineCopy size={20} />
                </p>
              </li>
            );
          })}
        </ListMenu>
      )}
    </WalletListBtnStyle>
  );
};

const WalletListBtnStyle = styled.div<{ isWhiteMode: boolean }>`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
  position: relative;

  .pr5 {
    display: flex;
    padding-right: 5px;
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_3};
  }
  .address {
    text-align: left;
    font-size: 16px;
    font-weight: 500;

    &.fw400 {
      font-weight: 400;
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_3};
      .font16 {
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_3};
        ${({ theme }) => theme.fontStyles[16]};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 1;
        white-space: pre;
      }
    }
  }
  svg {
    margin-left: 6px;
  }
  :hover {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Primary_1};
  }
`;
const ListMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  padding: 0px;
  z-index: 100;

  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  background-color: #fff;
  display: grid;
  padding: 20px;
  grid-row-gap: 10px;
  li {
    padding: 15px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 194px 60px;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 36px;
    .name {
      text-align: left;
      ${({ theme }) => theme.fontStyles[14]}
      color:${({ theme }) => theme.Secondary_Grey_1}
    }
    .Selected {
      ${({ theme }) => theme.fontStyles[12]}
      color:${({ theme }) => theme.Primary_1}
    }
    .textRight {
      text-align: right;
    }
    &.active {
      border: 1px solid ${({ theme }) => theme.Primary_1};
    }
  }
`;

export default WalletListBtn;
