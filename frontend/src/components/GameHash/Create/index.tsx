import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { useQueryClient } from "react-query";

import Modal from "../../Modal";
import Input from "../../Input";
import Button from "../../Button";

import useHashGame from "hooks/useHashGame";
import useSwap from "hooks/useSwap";
import useAppContext from "hooks/useAppContext";
import { usePolkadotJS } from "@polkadot/api-provider";

import { betNextFewBlock } from "config/config.json";

interface Props {
  setCreateShow: (arg: boolean) => void;
  setTxIsPenging: (a: boolean) => void;
}

const Create = ({ setCreateShow, setTxIsPenging }: Props) => {
  const [betLimit, setBetLimit] = useState(0);
  const { showFeedBack } = useAppContext();
  const { useGetSGPBalance } = useSwap();
  const { useCreateGame } = useHashGame();
  const { data: SGPBalance } = useGetSGPBalance();
  const { mutateAsync, isLoading } = useCreateGame();
  const queryClient = useQueryClient();
  const {
    state: { currentAccount },
  } = usePolkadotJS();

  useEffect(() => setBetLimit(0), [currentAccount?.address]);

  return (
    <Modal>
      <CreateStyle>
        <p className="title">
          <FormattedMessage id="Create" />
        </p>
        <p className="scondtitle">
          <FormattedMessage id="TotalBetLimit" />
        </p>
        <p className="desc">
          <FormattedMessage id="createDesc" />
        </p>
        <Input
          unit="SGP"
          type="number"
          value={betLimit}
          onChange={({ currentTarget: { value } }) => {
            const valueNumber = parseInt(value);
            if (SGPBalance) {
              setBetLimit(
                valueNumber > SGPBalance.balance
                  ? SGPBalance.balance
                  : valueNumber
              );
            }
          }}
        />
        <Button
          text="Submit"
          className="mt60 secondary"
          isSending={isLoading}
          disabled={betLimit <= 0}
          onClick={() => {
            mutateAsync({
              amount: betLimit,
              betNextFewBlock,
              callBack: ({ status }) => {
                setCreateShow(false);
                setTxIsPenging(!status.isInBlock);
                if (status.isInBlock) {
                  showFeedBack("Submitted");
                  queryClient.invalidateQueries("gameCenter");
                }
              },
            });
          }}
        />
        <Button
          text="Cancel"
          className="mt20 third"
          onClick={() => {
            setCreateShow(false);
          }}
        />
      </CreateStyle>
    </Modal>
  );
};

const CreateStyle = styled.div`
  background: rgba(255, 255, 255);
  border-radius: 10px;
  padding: 20px;
  max-width: 360px;
  .title {
    ${({ theme }) => theme.fontStyles[16]}
    text-align:center;
    color: ${({ theme }) => theme.Secondary_Black};
    font-weight: 500;
  }
  .scondtitle {
    font-weight: 500;
    margin-top: 20px;
    ${({ theme }) => theme.fontStyles[12]};
    text-align: left;
  }
  .desc {
    margin: 10px 0;
    text-align: left;
    color: ${({ theme }) => theme.Secondary_Grey_1};
    ${({ theme }) => theme.fontStyles[12]};
    font-weight: 500;
  }
  .mt60 {
    margin-top: 60px;
  }
  .mt20 {
    margin-top: 20px;
  }
`;

export default Create;
