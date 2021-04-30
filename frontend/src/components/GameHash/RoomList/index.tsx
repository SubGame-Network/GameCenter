import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../../Pagination";
import RoomBlock from "./RoomBlock";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../../hooks/useAppContext";

interface Props {
  roomData: {
    room: string;
    blockId: string;
    betLimit: string;
    status: number;
  }[];
}

const RoomList = ({ roomData }: Props) => {
  const { isWhiteMode } = useAppContext();

  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <RoomListStyle isWhiteMode={isWhiteMode}>
      {roomData.length > 0 ? (
        <>
          {" "}
          <ListArea>
            {roomData
              .slice(currentPage * perPage, (currentPage + 1) * perPage)
              .map((item, index) => {
                return <RoomBlock key={index} data={item} />;
              })}
          </ListArea>
          <Pagination
            totalPages={Math.ceil(roomData.length / perPage)}
            currentPage={currentPage + 1}
            pageNeighbours={0}
            previousPageFunc={() => {
              setCurrentPage(currentPage - 1);
            }}
            nextPageFunc={() => {
              setCurrentPage(currentPage + 1);
            }}
            gotoPageFunc={(e: any) => {
              setCurrentPage(e);
            }}
          />
        </>
      ) : (
        <p className="noGameYet">
          <FormattedMessage id="noGameYet" />
        </p>
      )}
    </RoomListStyle>
  );
};

const RoomListStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 30px 0 100px;
  width: 100%;
  .noGameYet {
    padding-top: 20px;
    text-align: center;
    ${({ theme }) => theme.fontStyles[14]}
    color:  ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Secondary_Grey_2}
  }
`;
const ListArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 109px);
  grid-gap: 20px;
`;

export default RoomList;
