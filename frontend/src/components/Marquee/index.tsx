import React from "react";
import styled from "styled-components";
import { IconOutlineNotice, IconOutlineArrowdown } from "react-icon-guanfan";
import useMarquee from "../../hooks/useApi/useMarquee";
import useSwap from "../../hooks/useSwap";
import DropDown from "../DropDown";
import { FormattedMessage } from "react-intl";
import useAppContext from "../../hooks/useAppContext";
import sliceAddress from "utils/sliceAddress";
import { formatNumber } from "utils/format";
import { usePolkadotJS } from "@polkadot/api-provider";
import { Link } from "react-router-dom";
interface Props {}

const Marquee = (props: Props) => {
  const {
    state: { keyring },
  } = usePolkadotJS();
  const { isWhiteMode } = useAppContext();

  const { data } = useMarquee();
  const { useGetSGPBalance } = useSwap();
  const { data: SGPBalance } = useGetSGPBalance();

  const showAddress = () => {
    const stringAry = data[0].split(" ");
    stringAry.splice(0, 1, sliceAddress(stringAry[0]));
    stringAry.splice(stringAry.length - 1, 1);
    return stringAry.join(" ");
  };
  const accountAddress = keyring?.getAccounts().map((item) => {
    return item.address;
  });
  return (
    <MarqueeStyle isWhiteMode={isWhiteMode}>
      <div className="wrap">
        <DropDown targetClass="marqueeMenu">
          <div className="left arrowDown dropDownBtn">
            <IconOutlineNotice />
            <div className="message">
              {data && data.length > 0 && <p>{showAddress()}</p>}
            </div>
            <IconOutlineArrowdown className="arrowDown dropDownBtn"></IconOutlineArrowdown>
            <div className="marqueeMenu">
              {data.map((item, index) => {
                const completeAddress = item.split(" ")[0];

                let stringAry = item.split(" ");
                stringAry[0] = sliceAddress(stringAry[0]);
                stringAry.splice(stringAry.length - 1, 1);
                if (accountAddress?.indexOf(completeAddress) !== -1) {
                  return (
                    <Link
                      key={index}
                      to={`/history/detail/${stringAry[stringAry.length - 1]}`}
                    >
                      <div className="item isAccount" key={index}>
                        {stringAry.join(" ")}
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <div className="item" key={index}>
                      {stringAry.join(" ")}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </DropDown>

        <div className="grid_column_3">
          <div className="exercisable flexEnd">
            <p>
              <FormattedMessage id="Exercisable" />
            </p>
            <p className="bold">
              {formatNumber(SGPBalance?.balance ? SGPBalance?.balance : 0)}
            </p>
            <p>SGP</p>
          </div>
          <div className="line"></div>
          <div className="unExercisable flexStart">
            <p>
              <FormattedMessage id="Unexercisable" />
            </p>
            <p className="bold">
              {formatNumber(SGPBalance?.reserve ? SGPBalance?.reserve : 0)}
            </p>
            <p>SGP</p>
          </div>
        </div>
      </div>
    </MarqueeStyle>
  );
};

const MarqueeStyle = styled.div<{ isWhiteMode: boolean }>`
  background-color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Black : theme.Dark_2};
  .wrap {
    display: grid;
    padding: 12px 130px;

    grid-template-columns: 1fr 1fr;
    grid-column-gap: 147px;
    width: 100%;
    color: ${({ theme }) => theme.Secondary_Grey_2};
    .left {
      display: grid;
      grid-column-gap: 10px;
      grid-template-columns: 20px 476px 10px;
      .arrowDown {
        cursor: pointer;
        color: ${({ theme }) => theme.Secondary_Grey_2};
      }
      .marqueeMenu {
        width: 530px;
        box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.26);
        border-radius: 3px;
        position: absolute;
        top: 40px;
        right: 0;
        background-color: ${({ theme, isWhiteMode }) =>
          isWhiteMode ? "#fff" : theme.Dark_3};
        display: none;
        z-index: 100;
        &.open {
          display: block;
        }
        .item {
          padding: 15px 37px 10px;
          ${({ theme }) => theme.fontStyles[14]};
          color: ${({ theme, isWhiteMode }) =>
            isWhiteMode ? theme.Secondary_Black : "#fff"};
          &.isAccount {
            color: ${({ theme, isWhiteMode }) =>
              isWhiteMode ? theme.Function_complete : theme.Primary_1};
            text-decoration: underline;
          }
        }
      }
    }

    .grid_column_3 {
      display: grid;
      grid-column-gap: 40px;
      grid-template-columns: 180px 1px 180px;
      grid-column-gap: 40px;
      align-items: center;
      justify-content: flex-end;
      .line {
        width: 1px;
        height: 13px;
        background-color: ${({ theme }) => theme.Secondary_Grey_3};
      }
      .exercisable,
      .unExercisable {
        display: grid;
        grid-column-gap: 15px;
        grid-template-columns: 96px 1fr 30px;
        align-items: center;
        p {
          text-align: right;
          ${({ theme }) => theme.fontStyles[12]};
          font-weight: 500;
          color: #fff;
          &.bold {
            ${({ theme }) => theme.fontStyles[16]};
          }
        }

        &.flexEnd {
          justify-content: flex-end;
        }
        &.flexStart {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export default Marquee;
