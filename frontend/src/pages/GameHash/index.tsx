import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ActionButton from "../../components/Button/ActionButton";
import {
  IconOutlineArrowlefttail,
  IconTwotonePlus,
  IconTwotoneElectric,
} from "react-icon-guanfan";
import { FormattedMessage } from "react-intl";
import { useHistory, useLocation } from "react-router-dom";
import RuleBtn from "../../components/Button/RuleBtn";
import TabGroup from "../../components/TabGroup";
import CreateBtn from "../../components/Button/CreateBtn";
import RoomList from "../../components/GameHash/RoomList";
import History from "../../components/GameHash/History";
import Create from "../../components/GameHash/Create";

import { useApiGetGameCenter } from "hooks/useApi/useGuessHash";
import { usePolkadotJS } from "@polkadot/api-provider";
import useAppContext from "../../hooks/useAppContext";
import useSubNewBlocks from "hooks/useSubNewBlocks";

interface Props {}

const GameHash = (props: Props) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [ruleShow, setRuleShow] = useState(false);
  const [tab, setTabNumber] = useState(
    !isNaN(parseInt(params.get("tab") || "0"))
      ? parseInt(params.get("tab") || "0")
      : 0
  );
  const [createShow, setCreateShow] = useState(false);
  const [txIsPenging, setTxIsPenging] = useState(false);
  const history = useHistory();
  const { data } = useApiGetGameCenter();
  const { setConnectPopUpShow, isWhiteMode } = useAppContext();

  const {
    state: { currentAccount, keyringState },
  } = usePolkadotJS();
  const { currentBlockNumber } = useSubNewBlocks(false, true);
  const rules = ["rules_1", "rules_2", "rules_3", "rules_4", "rules_5"];

  const roomData = useMemo(() => {
    if (data?.data.data && currentBlockNumber > 0) {
      return data?.data.data
        .filter((item) => parseInt(item.blockId) > currentBlockNumber)
        .map((item) => {
          return {
            ...item,
            status: parseInt(item.status),
          };
        });
    }

    return [];
  }, [data?.data.data, currentBlockNumber]);

  const tabOption = [
    {
      label: "GameCenter",

      tabnumber: 0,
    },
    {
      label: "History",

      tabnumber: 1,
    },
  ];
  const onClickRuleBtn = () => {
    setRuleShow(!ruleShow);
  };

  const onQuickjoin = () => {
    if (keyringState !== "READY" || !currentAccount) {
      setConnectPopUpShow(true);
      return;
    }
    const length = roomData.filter((item) => item.status === 1).length;
    if (length > 0) {
      history.push(
        `/room/${
          roomData.filter((item) => item.status === 1)[
            Math.floor(Math.random() * length)
          ].room
        }`
      );
    }
  };

  return (
    <GuessHashStyle className="wrap" isWhiteMode={isWhiteMode}>
      <div className="top">
        <ActionButton
          icon={<IconOutlineArrowlefttail />}
          onClick={history.goBack}
        />
        <img
          src="./images/guessHash.svg"
          className="guessHash"
          alt="guessHash"
        />
        <div>
          <p className="pageName">
            <FormattedMessage id="GuessHash" />
          </p>
          <p className="desc">
            <FormattedMessage id="guessdesc" values={{ br: <br /> }} />
          </p>
          <RuleBtn
            onClick={onClickRuleBtn}
            className={ruleShow ? "active" : ""}
          />
          {ruleShow && (
            <div className="rules">
              {rules.map((item) => {
                return (
                  <p className="rule">
                    <FormattedMessage id={item} />
                  </p>
                );
              })}
              <div className="example">
                <p>EX</p>
                <p>
                  <FormattedMessage id="example" values={{ br: <br /> }} />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="spacebetween">
        <TabGroup
          tabOptions={tabOption}
          useStateNumber={{
            setTabNumber: setTabNumber,
            tagNumber: tab,
            defaultTabNumber: 0,
          }}
        />
        <div className="d_flex">
          <CreateBtn
            icon={<IconTwotonePlus />}
            text="Create"
            disabled={txIsPenging}
            onClick={() => {
              if (keyringState !== "READY" || !currentAccount) {
                setConnectPopUpShow(true);
                return;
              }
              setCreateShow(true);
            }}
          />
          <CreateBtn
            className="blue"
            icon={<IconTwotoneElectric />}
            text="Quickjoin"
            disabled={roomData.length <= 0}
            onClick={onQuickjoin}
          />
        </div>
      </div>
      {tab === 0 && <RoomList roomData={roomData} />}
      {tab === 1 && <History />}
      {createShow && (
        <Create setCreateShow={setCreateShow} setTxIsPenging={setTxIsPenging} />
      )}
    </GuessHashStyle>
  );
};

const GuessHashStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 40px 130px 100px;
  .spacebetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid
      ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
    .d_flex {
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 200px 200px;
      padding-bottom: 10px;
    }
  }
  .top {
    padding-bottom: 40px;
    display: grid;
    grid-template-columns: 40px 175px 730px;
    grid-column-gap: 40px;
    .guessHash {
      width: 175px;
      height: 160px;
      border-radius: 10px;
    }
    .pageName {
      ${({ theme }) => theme.fontStyles[24]};
      font-weight: 500;
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
    }
    .desc {
      ${({ theme }) => theme.fontStyles[14]};

      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_1 : theme.Secondary_Grey_2};
      margin: 15px 0 20px;
    }
  }
  .rules {
    margin-top: 20px;
    display: grid;
    grid-row-gap: 30px;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 90px;
    .rule {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#FFF"};
    }
    .example {
      padding: 20px;
      background: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};
      border-radius: 5px;
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#FFF"};
      ${({ theme }) => theme.fontStyles[12]}
      display:grid;
      grid-template-columns: 27px 1fr;
      grid-column-gap: 10px;
    }
  }
`;

export default GameHash;
