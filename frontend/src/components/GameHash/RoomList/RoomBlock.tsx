import React from "react";
import styled from "styled-components";
import { IconTwotoneElectric } from "react-icon-guanfan";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import useAppContext from "../../../hooks/useAppContext";

interface Props {
  data: {
    room: string;
    blockId: string;
    betLimit: string;
    status: number;
  };
}

const RoomBlock = ({ data }: Props) => {
  const { isWhiteMode } = useAppContext();

  const hitory = useHistory();
  return (
    <RoomBlockStyle
      className={data.status === 1 ? "join border" : "view"}
      onClick={() => {
        hitory.push(`./room/${data.room}`);
      }}
      isWhiteMode={isWhiteMode}
    >
      <div className="d_grid">
        <p className="bold">
          <FormattedMessage id="ROOM" />
        </p>
        <p className="bold">{data.room}</p>

        <p className="gray">
          <FormattedMessage id="BlockID" />
        </p>

        <p className="gray value">{data.blockId}</p>

        <p className="gray">
          <FormattedMessage id="BetLimit" />
        </p>

        <p className="gray value">{data.betLimit}</p>
      </div>
      <div className="iconBox">
        {data.status === 1 ? (
          <>
            <IconTwotoneElectric />
            <p>
              <FormattedMessage id="Join" />
            </p>
          </>
        ) : (
          <p>
            <FormattedMessage id="View" />
          </p>
        )}
      </div>
    </RoomBlockStyle>
  );
};

const RoomBlockStyle = styled.div<{ isWhiteMode: boolean }>`
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 330px 1fr;
  grid-column-gap: 30px;
  &.border {
    border: 1px solid
      ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_3};
  }
  border-radius: 3px;
  cursor: pointer;
  .d_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 28px 18px 18px;
    grid-gap: 10px;
    P {
      text-align: left;
    }
  }
  &.join {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? "#fff" : theme.Dark_2};
    .bold {
      ${({ theme }) => theme.fontStyles[16]};
      color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Black : "#FFF"};
      font-weight: 500;
    }
    .gray {
      ${({ theme }) => theme.fontStyles[12]};
      color: ${({ theme }) => theme.Secondary_Grey_1};
      font-weight: 500;
      &.value {
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Grey_1 : "#fff"};
      }
    }
    .iconBox {
      color: ${({ theme }) => theme.Function_complete};
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
      svg {
        margin-right: 4px;
      }
    }
    :hover {
      border: 1px solid ${({ theme }) => theme.Function_complete};
      background-color: ${({ theme }) => theme.Function_complete};
      .gray,
      .iconBox,
      .bold {
        color: #fff;
      }
    }
  }
  &.view {
    .bold {
      ${({ theme }) => theme.fontStyles[16]};
      color: ${({ theme }) => theme.Secondary_Grey_1};
      font-weight: 500;
    }
    .gray {
      ${({ theme }) => theme.fontStyles[12]};
      color: ${({ theme }) => theme.Secondary_Grey_1};
      font-weight: 500;
    }
    .iconBox {
      color: ${({ theme }) => theme.Secondary_Grey_1};
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
    }
    :hover {
      border: 1px solid
        ${({ theme, isWhiteMode }) =>
          isWhiteMode ? "none" : theme.Function_complete};
      background-color: ${({ theme, isWhiteMode }) =>
        isWhiteMode ? theme.Secondary_Grey_3 : "transparent"};
      .iconBox {
        color: ${({ theme }) => theme.Function_complete};
      }
      .bold {
        color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? theme.Secondary_Grey_1 : "#fff"};
      }
    }
  }
`;

export default RoomBlock;
