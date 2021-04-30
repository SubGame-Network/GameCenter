import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { IconOutlineArrowlefttail } from "react-icon-guanfan";
import { useHistory } from "react-router-dom";

import ActionButton from "../../components/Button/ActionButton";
import Datepicker from "../../components/Datepicker";
import Table from "../../components/Table";
import {
  renderTimestamp,
  renderNumber,
  renderBalance,
} from "../../components/Table/Cell";
import { SelectColumnFilter } from "../../components/Table/Filter";

import { useApiGetSwapDetail } from "hooks/useApi/useSwap";
import { usePolkadotJS } from "@polkadot/api-provider";

import useAppContext from "../../hooks/useAppContext";

const Detail = () => {
  const { isWhiteMode } = useAppContext();

  const history = useHistory();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const {
    state: { currentAccount },
  } = usePolkadotJS();
  const { data } = useApiGetSwapDetail(
    currentAccount?.address || "",
    startDate,
    endDate,
    !!currentAccount?.address
  );

  const DetailData = useMemo(() => {
    if (data?.data.data) {
      return data?.data.data.map((item) => {
        return {
          Type: item.type,
          change_SGB: item.SGBChange,
          change_SGP: item.SGPChange,
          balance_SGP: item.SGPBalance,
          time: item.timestamp,
        };
      });
    }

    return [];
  }, [data?.data.data]);

  const Columns = [
    {
      Header: <FormattedMessage id="Type" />,
      accessor: "Type",
      width: 110,
      Filter: (column: any) => SelectColumnFilter(column),
    },
    {
      Header: <FormattedMessage id="change_SGB" />,
      accessor: "change_SGB",
      disableFilters: true,

      width: 110,
      Cell: renderNumber,
    },
    {
      Header: <FormattedMessage id="change_SGP" />,
      accessor: "change_SGP",
      disableFilters: true,

      width: 110,
      Cell: renderNumber,
    },
    {
      Header: <FormattedMessage id="balance_SGP" />,
      accessor: "balance_SGP",
      disableFilters: true,

      width: 110,
      Cell: renderBalance,
    },
    {
      Header: <FormattedMessage id="time" />,
      accessor: "time",
      disableFilters: true,

      width: 110,
      Cell: renderTimestamp,
    },
  ];
  return (
    <DetailStyle className="wrap" isWhiteMode={isWhiteMode}>
      <div className="pageTool">
        <div className="left">
          <ActionButton
            icon={<IconOutlineArrowlefttail />}
            onClick={history.goBack}
          />
          <p>
            <FormattedMessage id="Details" />
          </p>
        </div>
        <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          customWidth="330px"
          clearButton
        />
      </div>
      <div className="mt20">
        <Table columns={Columns} data={DetailData} />
      </div>
    </DetailStyle>
  );
};
const DetailStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 40px 130px 50px;
  .mt20 {
    margin-top: 20px;
  }
  .pageTool {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      p {
        margin-left: 20px;
        ${({ theme }) => theme.fontStyles[24]}
        font-weight:500;
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Black : "#FFF"};
      }
    }
  }
`;
export default Detail;
