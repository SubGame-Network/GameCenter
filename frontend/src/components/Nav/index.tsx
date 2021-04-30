import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { IconTwotoneSun, IconFilledMoon } from "react-icon-guanfan";

import useAppContext from "../../hooks/useAppContext";
import WalletListBtn from "./WalletListBtn";
import SwiftSwapBtn from "./SwiftSwapBtn";
import { useHistory } from "react-router-dom";
import { usePolkadotJS } from "@polkadot/api-provider";

const Nav = () => {
  const {
    state: { currentAccount, keyringState },
  } = usePolkadotJS();
  const history = useHistory();
  const { isWhiteMode, changeMode, setConnectPopUpShow } = useAppContext();
  return (
    <NavStyle isWhiteMode={isWhiteMode}>
      <div className="wrap">
        <div className="navLeft">
          <img
            src={
              isWhiteMode ? "/images/navLogo.svg" : "/images/navLogo_Dark.svg"
            }
            alt="navLogo"
            onClick={() => {
              history.push("/");
            }}
          />
          <p className="pink">
            <FormattedMessage id="GameCenter" />
          </p>
        </div>
        <div className="navRight">
          <SwiftSwapBtn />
          <p
            className="pressBtn"
            onClick={() => {
              if (keyringState !== "READY" || !currentAccount) {
                setConnectPopUpShow(true);
                return;
              }
              history.push("/detail");
            }}
          >
            <FormattedMessage id="Detail" />
          </p>
          <WalletListBtn />
          {isWhiteMode ? (
            <div className="icon">
              {" "}
              <IconTwotoneSun size={20} onClick={changeMode} />
            </div>
          ) : (
            <div className="icon">
              {" "}
              <IconFilledMoon size={20} onClick={changeMode} />
            </div>
          )}
        </div>
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.div<{ isWhiteMode: boolean }>`
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#fff" : theme.Dark_1};
  .wrap {
    padding: 15px 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.fontStyles[16]}

    .navLeft {
      display: grid;
      grid-template-columns: 172px 122px;
      align-items: center;
      grid-column-gap: 30px;
      p {
        color: ${({ theme }) => theme.Primary_1};
      }
      img {
        cursor: pointer;
      }
    }
    .navRight {
      display: grid;
      grid-template-columns: 135px 96px 206px 24px;
      grid-column-gap: 20px;
      align-items: center;
      .pressBtn {
        width: auto;
        height: 44px;
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        ${({ theme }) => theme.fontStyles[16]};
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_3};
        :hover {
          background-color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Grey_3 : theme.Primary_1};
        }
      }
      .icon {
        svg {
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Grey_2 : theme.Dark_4};
          cursor: pointer;
        }
      }
    }
  }
`;

export default Nav;
