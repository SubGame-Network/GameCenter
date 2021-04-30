import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { IconOutlineArrowright } from "react-icon-guanfan";
import { historyData } from "../../../api/types/GuessHash";
import Table from "../../Table";
import {
  renderResult,
  renderYouBet,
  renderTimestamp,
  renderNumber,
} from "../../Table/Cell";
import { SelectColumnFilter } from "../../Table/Filter";
import { useHistory } from "react-router-dom";
interface Props {
  historyData: historyData[];
  needYouBet: boolean;
}
const youBetColumn = {
  Header: <FormattedMessage id="YouBet" />,
  accessor: "oddEven",
  Filter: (column: any) => SelectColumnFilter(column),
  width: 130,
  Cell: renderYouBet,
};
const HistoryInterface = ({ historyData, needYouBet }: Props) => {
  const history = useHistory();
  const Columns: any = [
    {
      Header: <FormattedMessage id="Room" />,
      accessor: "room",
      width: 130,
    },
    {
      Header: <FormattedMessage id="BlockID" />,
      accessor: "blockId",
      width: 130,
    },
    {
      Header: <FormattedMessage id="Bet" />,
      accessor: "totalBet",
      disableFilters: true,
      width: 130,
      Cell: renderNumber,
    },
    {
      Header: <FormattedMessage id="BetLimit" />,
      accessor: "betLimit",
      disableFilters: true,
      width: 130,
      Cell: renderNumber,
    },

    {
      Header: <FormattedMessage id="Draw" />,
      accessor: "draw",
      width: 130,
      Filter: (column: any) => SelectColumnFilter(column),
    },
    {
      Header: <FormattedMessage id="result" />,
      accessor: "result",
      disableFilters: true,
      width: 130,
      Cell: renderResult,
    },
    {
      Header: <FormattedMessage id="Timestamp" />,
      accessor: "timestamp",
      disableFilters: true,
      width: 130,
      Cell: renderTimestamp,
    },
    {
      Header: <></>,
      accessor: "bet",
      disableFilters: true,
      width: 45,
      Cell: (Cell: any) => {
        const room = Cell.row.original.room;
        return (
          <IconOutlineArrowright
            size={16}
            className="arrowColumn"
            onClick={() => {
              history.push(`/history/detail/${room}`);
            }}
          />
        );
      },
    },
  ];
  if (needYouBet) Columns.splice(4, 0, youBetColumn);
  return (
    <HistoryInterfaceStyle>
      <Table columns={Columns} data={historyData}></Table>
    </HistoryInterfaceStyle>
  );
};

const HistoryInterfaceStyle = styled.div`
  width: 100%;
  padding: 0px 0 100px;
  .d_flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export default HistoryInterface;
