import { useEffect, useState } from "react";
import { usePolkadotJS } from "@polkadot/api-provider";
import { VoidFn } from "@polkadot/api/types";
import { Header } from "@polkadot/types/interfaces/runtime";

const useSubNewBlocks = (
  disabledNewBlocks?: boolean,
  disabledFinalizedBlocks?: boolean
) => {
  const {
    state: { api, apiState, nodeURL },
  } = usePolkadotJS();
  const [newBlocks, setNewBlocks] = useState<Header[]>([]);
  const [finalizedBlocks, setFinalizedBlocks] = useState<Header[]>([]);
  const [currentBlockNumber, setCurrentBlockNumber] = useState(0);

  useEffect(() => {
    let unSubNewHeads: VoidFn;
    let unSubFinalizedHeads: VoidFn;
    const subscribe = async () => {
      if (api && apiState === "READY") {
        if (!disabledNewBlocks) {
          unSubNewHeads = await api.rpc.chain.subscribeNewHeads(
            (lastHeader) => {
              setNewBlocks((blocks) => {
                return blocks.concat([lastHeader]);
              });
              setCurrentBlockNumber(lastHeader.number.toNumber());
            }
          );
        }

        if (!disabledFinalizedBlocks) {
          unSubFinalizedHeads = await api.rpc.chain.subscribeFinalizedHeads(
            (lastHeader) => {
              setFinalizedBlocks((blocks) => {
                return blocks.concat([lastHeader]);
              });
            }
          );
        }
      }
    };

    subscribe();

    return () => {
      if (unSubNewHeads) unSubNewHeads();
      if (unSubFinalizedHeads) unSubFinalizedHeads();
    };
  }, [api, apiState, disabledFinalizedBlocks, disabledNewBlocks]);

  useEffect(() => {
    setNewBlocks([]);
    setFinalizedBlocks([]);
    setCurrentBlockNumber(0);
  }, [nodeURL]);

  return {
    newBlocks,
    finalizedBlocks,
    currentBlockNumber,
  };
};

export default useSubNewBlocks;
