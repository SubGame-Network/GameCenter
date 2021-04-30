import React, { useMemo } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { useHistory, useParams } from "react-router-dom";
import {
  IconOutlineArrowlefttail,
  IconOutlineLightOut,
  IconOutlineCopy,
} from "react-icon-guanfan";
import ActionButton from "../../components/Button/ActionButton";
import Table from "../../components/Table";
import {
  renderResult,
  renderYouBet,
  renderAddress,
} from "../../components/Table/Cell";

import { useApiGetHistoryDetails } from "hooks/useApi/useGuessHash";
import useAppContext from "hooks/useAppContext";
import { usePolkadotJS } from "@polkadot/api-provider";

import { formatTime } from "utils/format";
import sliceAddress from "utils/sliceAddress";

const HistoryDetail = () => {
  const { isWhiteMode, showFeedBack } = useAppContext();

  const histroy = useHistory();
  const { room } = useParams<{ room: string }>();
  const { data } = useApiGetHistoryDetails(
    parseInt(room),
    !isNaN(parseInt(room))
  );
  const {
    state: { currentAccount },
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
  const detail = useMemo(() => {
    if (data?.data.data) {
      const { historyDetailBetRecord, historyDetailInfo } = data.data.data;
      const {
        room,
        betLimit,
        createTime,
        bookmakerAddress,
        blockId,
        hash,
        draw,
        result,
      } = historyDetailInfo;
      return {
        roomData: {
          room,
          betLimit,
          createTime,
          address: bookmakerAddress,
        },
        resultData: {
          blockId,
          hash,
          draw,
          result,
        },
        detailData: historyDetailBetRecord,
      };
    }

    return {
      roomData: null,
      resultData: null,
      detailData: null,
    };
  }, [data?.data.data]);

  const Columns = [
    {
      Header: <FormattedMessage id="Address" />,
      accessor: "address",
      disableFilters: true,

      width: 355,
      Cell: (Cell: any) => {
        return (
          <div
            onClick={() => {
              handleCopy(Cell.row.original.address || "-");
            }}
          >
            {renderAddress(Cell.row.original.address, "45px", "-120px")}
          </div>
        );
      },
    },
    {
      Header: <FormattedMessage id="Bet" />,
      accessor: "bet",
      disableFilters: true,
      width: 355,
      Cell: renderYouBet,
    },
    {
      Header: <FormattedMessage id="Result" />,
      accessor: "result",
      disableFilters: true,

      width: 355,
      Cell: renderResult,
    },
  ];

  return (
    <HistoryDetailStyle className="wrap" isWhiteMode={isWhiteMode}>
      <div className="d_grid">
        <ActionButton
          icon={<IconOutlineArrowlefttail />}
          onClick={histroy.goBack}
        />
        <p className="pageName">
          <FormattedMessage id="Historydetails" />
        </p>
      </div>
      <div className="detailBlockArea">
        <DetailBlock isWhiteMode={isWhiteMode}>
          <p className="bold">
            <FormattedMessage id="Room" />
          </p>
          <p className="bold right">{detail.roomData?.room}</p>
          <div>
            <p className="key">
              <FormattedMessage id="BetLimit" />
            </p>
            <p className="value">{detail.roomData?.betLimit}</p>
          </div>
          <div>
            <p className="key">
              <FormattedMessage id="CreateTime" />
            </p>
            <p className="value">{formatTime(detail.roomData?.createTime)}</p>
          </div>
          <div>
            <p className="key">
              <FormattedMessage id="BookmakerAddress" />
            </p>
            <p className="value">
              {detail.roomData?.address}
              {currentAccount?.address === detail.roomData?.address ? (
                <span className="you">(YOU)</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div></div>
        </DetailBlock>

        <DetailBlock isWhiteMode={isWhiteMode}>
          <p className="bold">
            <FormattedMessage id="Result" />
          </p>
          <a
            href={`http://subgamenode.subgame.org:8080/#/explorer/query/${detail.resultData?.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <div className="scanBtn">
              <p className="pink">
                <FormattedMessage id="ViewinPolkscan" />
              </p>
              <IconOutlineLightOut />
            </div>
          </a>

          <div>
            <p className="key">
              <FormattedMessage id="BlockID" />
            </p>
            <p className="value">{detail.resultData?.blockId}</p>
          </div>
          <div>
            <p className="key">
              <FormattedMessage id="Hash" />
            </p>
            <div
              className="hashItem"
              onClick={() => {
                handleCopy(detail.resultData?.hash || "");
              }}
            >
              <p className="value">
                {sliceAddress(detail.resultData?.hash, 10, 10)}
              </p>
              <IconOutlineCopy size={16} />
              <div className="tip">
                <FormattedMessage id="clickToCopy" />
              </div>
            </div>
          </div>
          <div>
            <p className="key">
              <FormattedMessage id="Draw" />
            </p>
            <p className="value">{detail.resultData?.draw}</p>
          </div>
          <div>
            <p className="key">
              <FormattedMessage id="Result" />
            </p>
            <p className="value">{detail.resultData?.result}</p>
          </div>
        </DetailBlock>
      </div>
      <div className="mt30">
        <Table
          columns={Columns}
          data={detail.detailData || []}
          needBorderShadow={false}
          needFilterRow={false}
        />
      </div>
    </HistoryDetailStyle>
  );
};
const HistoryDetailStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 40px 130px 100px;
  .mt30 {
    margin-top: 30px;
  }
  .d_grid {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-column-gap: 20px;
    align-items: center;
  }
  .pageName {
    ${({ theme }) => theme.fontStyles[24]}
    font-weight:500;
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};
  }
  .detailBlockArea {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
`;
const DetailBlock = styled.div<{ isWhiteMode: boolean }>`
  display: grid;
  grid-template-rows: 26px 45px 45px;
  grid-template-columns: 250px 1fr;
  grid-gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background-color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? "#fff" : theme.Dark_2};
  .scanBtn {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: flex-end;
    color: ${({ theme }) => theme.Primary_1};
    .pink {
      ${({ theme }) => theme.fontStyles[14]};
    }
  }
  .bold {
    ${({ theme }) => theme.fontStyles[16]};
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};

    font-weight: 500;
    &.right {
      text-align: right;
    }
  }
  .hashItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    svg {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Dark_Bg : "#fff"};
    }
    .tip {
      padding: 5px 10px;
      position: absolute;
      right: -120px;
      top: 15px;
      display: none;
      background: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? "#fff" : theme.Dark_3};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Dark_Bg : "#fff"};
      border: ${({ isWhiteMode }) =>
        isWhiteMode ? "1px solid #e8e8e8;" : "none"};
      box-sizing: border-box;
      border-radius: ${({ isWhiteMode }) => (isWhiteMode ? "10px" : "3px")};
      ${({ theme }) => theme.fontStyles[14]};
    }
    :hover {
      color: ${({ theme }) => theme.Function_complete};
      .value {
        color: ${({ theme }) => theme.Function_complete};
      }
      .tip {
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Dark_Bg : "#fff"};
        display: block;
      }
      svg {
        color: ${({ theme, isWhiteMode }) => theme.Function_complete};
      }
    }
  }
  .key {
    ${({ theme }) => theme.fontStyles[12]};
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_1 : theme.Secondary_Grey_1};

    font-weight: 500;
  }
  .value {
    ${({ theme }) => theme.fontStyles[14]};
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};

    font-weight: 400;
    .you {
      color: ${({ theme }) => theme.Primary_1};
    }
  }
`;
export default HistoryDetail;
