import { useCallback } from "react";
import { Header } from "@polkadot/types/interfaces/runtime";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { ISubmittableResult } from "@polkadot/types/types";
import BN from "bn.js";
import { useMutation, useQueryClient, UseMutationResult } from "react-query";

import { usePolkadotJS } from "@polkadot/api-provider";
interface IGameInfo {
  owner: string;
  block_number: number;
  bet_block_number: number;
  amount: number;
}

type TCallBack = (result: ISubmittableResult, unsub: () => void) => void;

export enum EGameMode {
  ODD = 1,
  EVEN = 2,
}

export interface IGameResult {
  lastNumber: number;
  charIndex: number;
  hash: string;
  gameResult: number;
}

interface IHashGame {
  waitGameResult: (gameIndex: number) => Promise<IGameResult>;
  useCreateGame: () => UseMutationResult<
    void,
    unknown,
    {
      betNextFewBlock?: number | undefined;
      amount: number;
      callBack?: TCallBack | undefined;
    },
    unknown
  >;
  useJoinGame: () => UseMutationResult<
    void,
    unknown,
    {
      gameIndex: number;
      value: number;
      gameMode: EGameMode;
      callBack?: TCallBack | undefined;
    },
    unknown
  >;
}

const useHashGame = (): IHashGame => {
  const {
    state: { api, apiState, currentAccount, chainDecimal },
  } = usePolkadotJS();
  const queryClient = useQueryClient();

  const formatNumberToUnit = (number: number) => {
    return new BN(number).mul(new BN(10).pow(new BN(chainDecimal))).toString();
  };

  const waitForBlock = useCallback(
    async (blockNumber: number) => {
      if (!api || apiState !== "READY") {
        throw new Error("api not ready yet");
      }

      try {
        const LatestHeader = await api.rpc.chain.getHeader();

        if (LatestHeader.number.toNumber() === blockNumber) {
          return LatestHeader;
        }

        if (LatestHeader.number.toNumber() > blockNumber) {
          try {
            const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
            const signedBlock = await api.rpc.chain.getBlock(blockHash);
            const currentHeader = signedBlock.block.header;
            if (currentHeader.number.toNumber() === blockNumber) {
              return currentHeader;
            }
          } catch (error) {
            throw new Error(error);
          }
        }
      } catch (error) {
        throw new Error(error);
      }

      return new Promise<Header>(async (resolve, reject) => {
        try {
          const unSubNewHeads = await api.rpc.chain.subscribeNewHeads(
            (lastHeader) => {
              if (lastHeader.number.toNumber() === blockNumber) {
                resolve(lastHeader);
                unSubNewHeads();
              }
            }
          );
        } catch (error) {
          reject(error);
        }
      });
    },
    [api, apiState]
  );

  const waitGameResult = useCallback(
    async (gameIndex: number) => {
      if (!api || apiState !== "READY") {
        throw new Error("api not ready yet");
      }

      return new Promise<IGameResult>(async (resolve, reject) => {
        try {
          const gameInfo = await api.query.gameGuessHashModule.gameList(
            gameIndex
          );
          const data: IGameInfo = (gameInfo as any).toJSON();

          if (!gameInfo) {
            reject("Get GameInfo Failed");
          }

          if (gameInfo.isEmpty) {
            reject("Game does not exist");
          }

          try {
            const block = await waitForBlock(data.bet_block_number);

            const hash = block.hash.toString();

            const lastNumber = hash
              .split("")
              .reverse()
              .filter((v) => !isNaN(parseInt(v)))
              .map((v) => parseInt(v))[0];

            const charIndex = hash.split("").lastIndexOf(lastNumber.toString());

            const result: IGameResult = {
              lastNumber,
              charIndex,
              hash,
              gameResult: 1,
            };

            if (lastNumber % 2 === 0) {
              result.gameResult = EGameMode.EVEN;
              resolve(result);
            } else {
              result.gameResult = EGameMode.ODD;
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        } catch (error) {
          reject(error);
        }
      });
    },
    [api, waitForBlock, apiState]
  );

  const useJoinGame = () => {
    return useMutation(
      async ({
        gameIndex,
        value,
        gameMode,
        callBack,
      }: {
        gameIndex: number;
        value: number;
        gameMode: EGameMode;
        callBack?: TCallBack;
      }) => {
        if (!api || apiState !== "READY") {
          throw new Error("api not ready yet");
        }

        if (!currentAccount) {
          throw new Error("No account found");
        }

        const injector = await web3FromAddress(currentAccount.address);
        const unsub: any = await api.tx.gameGuessHashModule
          .bet(gameIndex, formatNumberToUnit(value), gameMode)
          .signAndSend(
            currentAccount.address,
            { signer: injector.signer },
            (result) => {
              if (callBack) callBack(result, unsub);
              if (result.status.isInBlock) {
                queryClient.invalidateQueries("SGPBalance");
              }
            }
          );
      }
    );
  };

  const useCreateGame = () => {
    return useMutation(
      async ({
        betNextFewBlock,
        amount,
        callBack,
      }: {
        betNextFewBlock?: number;
        amount: number;
        callBack?: TCallBack;
      }) => {
        if (!api || apiState !== "READY") {
          throw new Error("api not ready yet");
        }

        if (!currentAccount) {
          throw new Error("No account found");
        }

        const injector = await web3FromAddress(currentAccount.address);
        const unsub: any = await api.tx.gameGuessHashModule
          .createGame(betNextFewBlock, formatNumberToUnit(amount))
          .signAndSend(
            currentAccount.address,
            { signer: injector.signer },
            (result) => {
              if (callBack) callBack(result, unsub);
              if (result.status.isInBlock) {
                queryClient.invalidateQueries("SGPBalance");
              }
            }
          );
      }
    );
  };

  return {
    useJoinGame,
    useCreateGame,
    waitGameResult,
  };
};

export default useHashGame;
