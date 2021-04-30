import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import TabGroup from "../../TabGroup";
import Datepicker from "../../Datepicker";
import HistoryInterface from "./HistoryInterface";

import {
  useApiGetHistoryPlayer,
  useApiGetHistoryBookmaker,
} from "hooks/useApi/useGuessHash";
import { usePolkadotJS } from "@polkadot/api-provider";

const History = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [tab, setTabNumber] = useState(
    !isNaN(parseInt(params.get("his") || "0"))
      ? parseInt(params.get("his") || "0")
      : 0
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const {
    state: { currentAccount },
  } = usePolkadotJS();
  const { data: historyPlayer } = useApiGetHistoryPlayer(
    startDate,
    endDate,
    currentAccount?.address,
    !!currentAccount?.address && tab === 1
  );
  const { data: historyBookmaker } = useApiGetHistoryBookmaker(
    startDate,
    endDate,
    currentAccount?.address,
    !!currentAccount?.address && tab === 0
  );

  const tabOption = [
    {
      label: "BookMaker",
      tabnumber: 0,
    },
    {
      label: "Player",
      tabnumber: 1,
    },
  ];

  return (
    <HistoryStyle>
      <div className="d_flex">
        <TabGroup
          tabOptions={tabOption}
          useStateNumber={{
            setTabNumber: setTabNumber,
            tagNumber: tab,
            defaultTabNumber: 0,
          }}
          className="style2"
          activeNeedBg
        />
        <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          customWidth="330px"
          clearButton
        />
      </div>
      {tab === 0 && (
        <HistoryInterface
          historyData={historyBookmaker?.data.data || []}
          needYouBet={false}
        />
      )}
      {tab === 1 && (
        <HistoryInterface
          historyData={historyPlayer?.data.data || []}
          needYouBet={true}
        />
      )}
    </HistoryStyle>
  );
};

const HistoryStyle = styled.div`
  width: 100%;
  padding: 40px 0 100px;
  .d_flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export default History;
