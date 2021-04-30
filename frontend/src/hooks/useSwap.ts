import { web3FromAddress } from "@polkadot/extension-dapp";
import { ISubmittableResult } from "@polkadot/types/types";
import BN from "bn.js";
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseMutationResult,
} from "react-query";

import { usePolkadotJS } from "@polkadot/api-provider";

interface ISGPBalance {
  balance: number;
  reserve: number;
}

type TCallBack = (result: ISubmittableResult, unsub: () => void) => void;

interface IHashGame {
  useGetSGPBalance: () => UseQueryResult<ISGPBalance | null, unknown>;
  useSwapSGP: () => UseMutationResult<
    void,
    unknown,
    {
      amount: number;
      callBack?: TCallBack;
    },
    unknown
  >;
  useSwapSGB: () => UseMutationResult<
    void,
    unknown,
    {
      amount: number;
      callBack?: TCallBack;
    },
    unknown
  >;
}

const useSwap = (): IHashGame => {
  const {
    state: { api, apiState, currentAccount, chainDecimal },
  } = usePolkadotJS();
  const queryClient = useQueryClient();

  const formatNumberToUnit = (number: number) => {
    return new BN(number).mul(new BN(10).pow(new BN(chainDecimal))).toString();
  };

  const formatNumberToNormal = (number: number) => {
    return number / Math.pow(10, chainDecimal);
  };

  const useGetSGPBalance = () => {
    return useQuery(
      ["SGPBalance", currentAccount?.address],
      async () => {
        if (!api || apiState !== "READY") {
          throw new Error("api not ready yet");
        }

        if (!currentAccount) {
          throw new Error("No account found");
        }

        try {
          const result = await api.query.chips.chipsMap(currentAccount.address);
          if (result.isEmpty) return Promise.resolve(null);

          const values: ISGPBalance = (result as any).toJSON();
          return Promise.resolve({
            balance: formatNumberToNormal(values.balance),
            reserve: formatNumberToNormal(values.reserve),
          });
        } catch (error) {
          throw new Error(error);
        }
      },
      {
        enabled: !!api && apiState === "READY" && !!currentAccount?.address,
      }
    );
  };

  const useSwapSGP = () => {
    return useMutation(
      async ({
        amount,
        callBack,
      }: {
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
        const unsub: any = await api.tx.chips
          .buyChips(formatNumberToUnit(amount))
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

  const useSwapSGB = () => {
    return useMutation(
      async ({
        amount,
        callBack,
      }: {
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
        const unsub: any = await api.tx.chips
          .redemption(formatNumberToUnit(amount))
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
    useGetSGPBalance,
    useSwapSGP,
    useSwapSGB,
  };
};

export default useSwap;
