import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

interface Props {}

const Home = (props: Props) => {
  const { isWhiteMode } = useAppContext();

  const history = useHistory();
  return (
    <HomeStyle>
      <Banner>
        <p className="bannertext wrap">
          <FormattedMessage id="GamesLobby" />
        </p>
      </Banner>
      <div className="container">
        <BlockArea className="wrap">
          <div
            className="hidden"
            onClick={() => {
              history.push("/gamehash");
            }}
          >
            <div className="guessHash"></div>
          </div>

          <div className="unKnowBLocks">
            <UnknowBlock isWhiteMode={isWhiteMode}>
              <FormattedMessage id="COMINGSOON" />
            </UnknowBlock>
            <UnknowBlock isWhiteMode={isWhiteMode}>
              <FormattedMessage id="COMINGSOON" />
            </UnknowBlock>
            <UnknowBlock isWhiteMode={isWhiteMode}>
              <FormattedMessage id="COMINGSOON" />
            </UnknowBlock>
            <UnknowBlock isWhiteMode={isWhiteMode}>
              <FormattedMessage id="COMINGSOON" />
            </UnknowBlock>
          </div>
        </BlockArea>
        <Button text="seemore" className="btn" />
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .container {
    padding: 60px 130px 100px;
    .btn {
      width: 320px;
      margin: auto;
      margin-top: 60px;
    }
  }
`;
const Banner = styled.div`
  padding: 40px 0px 47px;
  background-image: url("./images/Banner.svg");

  background-size: cover;
  .bannertext {
    padding: 0 130px;
    ${({ theme }) => theme.fontStyles[24]};
    color: #fff;
  }
`;
const BlockArea = styled.div`
  display: grid;
  grid-template-columns: 542px 542px;
  grid-column-gap: 22px;
  grid-template-rows: 500px;
  justify-content: center;
  .hidden {
    border-radius: 20px;
    overflow: hidden;
    .guessHash {
      width: 100%;
      height: 100%;
      background-image: url("./images/guessHash.svg");
      background-size: cover;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }

  .unKnowBLocks {
    display: grid;
    grid-template-columns: 260px 260px;
    grid-template-rows: 240px 240px;
    grid-gap: 22px;
  }
`;
const UnknowBlock = styled.div<{ isWhiteMode: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Grey_3 : theme.Dark_2};
  border-radius: 10px;
  color: ${({ theme, isWhiteMode }) =>
    isWhiteMode ? theme.Secondary_Grey_1 : theme.Secondary_Grey_1};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fontStyles[18]};
  :hover {
    background-color: ${({ theme, isWhiteMode }) =>
      isWhiteMode ? theme.Secondary_Black : theme.Function_complete};
    color: #fff;
  }
`;
export default Home;
