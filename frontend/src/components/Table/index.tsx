import React, { useRef } from "react";
import styled from "styled-components";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useFlexLayout,
} from "react-table";
import Input from "../Input";
import ActionButton from "../Button/ActionButton";
import useAppContext from "../../hooks/useAppContext";

import { IconSharpArrowright, IconSharpArrowleft } from "react-icon-guanfan";
import { FormattedMessage } from "react-intl";
interface TableProps {
  columns: any[];
  data: any[];
  isLoading?: boolean;
  disabledTargets?: {
    id: string;
    value: string | number | boolean;
    onlyBackGroundDisabledTarget?: {
      columnID: string;
      value: string | number | boolean;
    }[];
  }[];
  needBorderShadow?: boolean;
  needFilterRow?: boolean;
}

function DefaultColumnFilter({ column: { filterValue, setFilter } }: any) {
  return (
    <div style={{ width: "100%" }}>
      <Input
        value={filterValue || ""}
        onChange={(e: any) => {
          setFilter(e.target.value || undefined);
        }}
      />
    </div>
  );
}

const Table: React.FunctionComponent<TableProps> = ({
  columns,
  data,
  needBorderShadow = true,
  disabledTargets,
  isLoading = false,
  needFilterRow = true,
}) => {
  const { isWhiteMode } = useAppContext();

  const skipPageResetRef: any = useRef(false);

  const defaultColumn = {
    Filter: DefaultColumnFilter,
    Cell: (Cell: any) => <span>{Cell.value}</span>,
  };

  const pageWillReset = () => {
    skipPageResetRef.current = true;
  };
  const pageWillNotReset = () => {
    skipPageResetRef.current = false;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {},
      defaultColumn,
      autoResetFilters: false,
      autoResetPage: skipPageResetRef.current,
    },
    useFilters,
    useSortBy,
    usePagination,
    useFlexLayout
  );

  return (
    <>
      {" "}
      <TableDiv
        {...getTableProps()}
        needBorderShadow={needBorderShadow}
        isWhiteMode={isWhiteMode}
      >
        <Head isWhiteMode={isWhiteMode}>
          {headerGroups.map((headerGroup, index) => {
            return (
              <TheadTr
                {...headerGroup.getHeaderGroupProps()}
                key={index}
                isWhiteMode={isWhiteMode}
              >
                {headerGroup.headers.map((column: any) => {
                  const { canSort, isSorted, isSortedDesc } = column;
                  return (
                    <TheadTh
                      className={`${canSort ? "canSort backgroundGray" : ""}`}
                      {...column.getSortByToggleProps({ title: "" })}
                      {...column.getHeaderProps()}
                      textAlign={column.textAlign}
                      isWhiteMode={isWhiteMode}
                    >
                      <p className="header">
                        {column.render("Header")}
                        {isSorted && (
                          <i
                            className={`icon-Typearrow-${
                              isSortedDesc ? "down" : "up"
                            }`}
                          />
                        )}
                      </p>
                    </TheadTh>
                  );
                })}
              </TheadTr>
            );
          })}

          {needFilterRow &&
            headerGroups.map((headerGroup, index) => {
              return (
                <TheadTr
                  {...headerGroup.getHeaderGroupProps()}
                  className="filter-row"
                  onClick={pageWillReset}
                  key={index}
                  isWhiteMode={isWhiteMode}
                >
                  {headerGroup.headers.map((column) => {
                    return (
                      <TheadTh
                        {...column.getHeaderProps()}
                        onClick={pageWillReset}
                        isWhiteMode={isWhiteMode}
                      >
                        {column.canFilter ? column.render("Filter") : null}
                      </TheadTh>
                    );
                  })}
                </TheadTr>
              );
            })}
        </Head>
        <Body
          onClick={pageWillNotReset}
          {...getTableBodyProps()}
          isWhiteMode={isWhiteMode}
        >
          {isLoading ? (
            "loading"
          ) : page.length > 0 ? (
            page.map((row: any, index) => {
              prepareRow(row);
              let isDisabled = disabledTargets?.some((item: any) => {
                return (
                  row.original[`${item.id}`] &&
                  row.original[`${item.id}`] === item.value
                );
              });
              return (
                <React.Fragment key={index}>
                  <TbodyTr
                    isWhiteMode={isWhiteMode}
                    {...row.getRowProps()}
                    className={`${index % 2 === 0 ? "" : "gray"}`}
                  >
                    {row.cells.map((cell: any) => {
                      const cellId = cell.column.id;
                      let onlyBackGroundDisabled: boolean = false;
                      disabledTargets?.forEach((item) =>
                        item.onlyBackGroundDisabledTarget?.forEach((target) => {
                          if (
                            target.columnID === cellId &&
                            target.value &&
                            isDisabled
                          ) {
                            onlyBackGroundDisabled = true;
                          }
                        })
                      );

                      return (
                        <TbodyTd
                          isWhiteMode={isWhiteMode}
                          {...cell.getCellProps()}
                          className={`${isDisabled ? "Disabled" : ""} ${
                            onlyBackGroundDisabled
                              ? "onlyBackGroundDisabled"
                              : ""
                          }`}
                        >
                          {cell.render("Cell", {
                            editable: false,
                            title: cell.value,
                          })}
                        </TbodyTd>
                      );
                    })}
                  </TbodyTr>
                </React.Fragment>
              );
            })
          ) : (
            <p className="noRecord">
              <FormattedMessage id="noRecord" />
            </p>
          )}
        </Body>
      </TableDiv>{" "}
      {!isLoading && page.length > 0 && (
        <TopTools isWhiteMode={isWhiteMode}>
          <div className="left">
            <PageButtonGroup isWhiteMode={isWhiteMode}>
              <ActionButton
                onClick={previousPage}
                icon={<IconSharpArrowleft />}
                disabled={pageIndex + 1 <= 1}
                className="arrowBtn"
              >
                <i className="icon-Typearrow-left" />
              </ActionButton>
              <p>
                {pageIndex + 1} / {pageCount === 0 ? 1 : pageCount}
              </p>
              <ActionButton
                onClick={nextPage}
                icon={<IconSharpArrowright />}
                disabled={pageIndex + 1 >= pageCount}
                className="arrowBtn"
              >
                <i className="icon-Typearrow-right" />
              </ActionButton>
            </PageButtonGroup>
          </div>
        </TopTools>
      )}
    </>
  );
};

const TableDiv = styled.div<{
  needBorderShadow: boolean;
  isWhiteMode: boolean;
}>`
  border-collapse: collapse;
  flex: 1 0 auto;
  min-width: 0px;
  box-shadow: ${({ needBorderShadow }) =>
    needBorderShadow ? "0px 0px 10px -2px rgba(0, 0, 0, 0.15)" : ""};
  border-radius: 5px;
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Dark_2};
`;

const TopTools = styled.div<{
  isWhiteMode: boolean;
}>`
  height: 51px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "#FFF" : theme.Dark_Bg};

  .left {
    display: flex;
    align-items: center;
  }
  h1 {
    margin: 0 30px 0 0;
    font-size: 18px;
    font-weight: 600;
    color: #000;
  }
  &.bottomPageBtn {
    justify-content: flex-end;
    margin: 5px 0 0 0;
  }
`;

const PageButtonGroup = styled.div<{ isWhiteMode: boolean }>`
  font-size: 14px;
  color: #181818;
  display: flex;
  align-items: center;
  p {
    margin: 0 20px;
    color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};
  }
`;

const Head = styled.div<{ isWhiteMode: boolean }>`
  border-bottom: 1px solid
    ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
  padding: 20px 20px 10px;
`;

const TheadTr = styled.div<{ isWhiteMode: boolean }>`
  width: 100%;
  text-align: left;
  color: #231815;
  &.filter-row {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#fff" : theme.Dark_2};
    input {
      background-color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? "#fff" : theme.Dark_3};
      border: 1px solid
        ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#FFF"};
    }
  }
`;

const TheadTh = styled.div<{ textAlign?: string; isWhiteMode: boolean }>`
  padding: 10px 8px;
  height: 50px;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fontStyles[14]};
  font-weight: 500;
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : theme.Dark_4};
  flex: auto !important;

  .header {
    margin: 0;
    text-align: ${({ textAlign = "left" }) => textAlign};
    width: 100%;
  }
  i[class^="icon-Member-System-Icon_Order"],
  i[class^="icon-Member-System-Icon_Order"]::before {
    color: #231815;
    font-size: 16px;
  }
  &:hover {
    &.canSort {
      cursor: pointer;
      background-color: var(--color4);
    }
  }
`;

const Body = styled.div<{ isWhiteMode: boolean }>`
  padding: 10px 20px 30px;
  .noRecord {
    color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_2};
    ${({ theme }) => theme.fontStyles[14]};
    text-align: center;
    padding-top: 50px;
  }
`;

const TbodyTr = styled.div<{ isWhiteMode: boolean }>`
  width: 100%;
  background-color: ${({ isWhiteMode, theme }) =>
    isWhiteMode ? "FFF" : theme.Dark_2};
  &.gray {
    background-color: ${({ isWhiteMode }) =>
      isWhiteMode ? "rgba(232, 232, 232, 0.5)" : "rgba(53, 57, 74, 0.3)"};
  }
  &:hover {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "rgba(185, 185, 185, 0.5)" : theme.Dark_3};
  }
`;

const TbodyTd = styled.div<{ isWhiteMode: boolean }>`
  padding: 5px 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  word-break: break-all;

  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : "#fff"};
  font-size: 14px;
  text-align: center;
  flex: auto !important;
  .arrowColumn {
    color: ${({ theme }) => theme.Secondary_Grey_1};
    :hover {
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#fff"};
      cursor: pointer;
    }
  }
  &.Disabled {
    opacity: 0.3;
  }
  &.onlyBackGroundDisabled {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.3);
  }
  span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }
`;

export default Table;
