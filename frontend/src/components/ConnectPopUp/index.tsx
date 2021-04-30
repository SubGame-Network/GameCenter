import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Button from "../Button";
import Modal from "../Modal";
interface Props {
  setConnectPopUpShow: (a: boolean) => void;
}

const ConnectPopUp = ({ setConnectPopUpShow }: Props) => {
  return (
    <Modal>
      {" "}
      <ConnectPopUpStyle>
        <p className="title">
          <FormattedMessage id="walletConnect" />
        </p>
        <p className="desc1">
          <FormattedMessage id="walletConnect_desc1" values={{ br: <br /> }} />
        </p>
        <p className="desc2">
          {" "}
          <FormattedMessage id="walletConnect_desc2" values={{ br: <br /> }} />
        </p>
        <Button
          text="ok"
          className="btn secondary"
          onClick={() => {
            setConnectPopUpShow(false);
          }}
        />
      </ConnectPopUpStyle>
    </Modal>
  );
};

const ConnectPopUpStyle = styled.div`
  padding: 20px;
  background-color: #fff;
  background: rgba(255, 255, 255);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  .title {
    text-align: center;
    ${({ theme }) => theme.fontStyles[16]};
    font-weight: 500;
  }
  .desc1 {
    margin-top: 20px;
    ${({ theme }) => theme.fontStyles[12]};
    font-weight: 500;
    text-align: left;
  }
  .desc2 {
    margin-top: 20px;
    ${({ theme }) => theme.fontStyles[12]};
    font-weight: 500;
    color: ${({ theme }) => theme.Secondary_Grey_1};
    text-align: left;
  }
  .btn {
    margin-top: 94px;
  }
`;

export default ConnectPopUp;
