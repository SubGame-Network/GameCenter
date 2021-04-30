import { useEffect, useState } from "react";

import { usePolkadotJS } from "@polkadot/api-provider";

type TBalances = { [address: string]: number };

const useTokenBalance = () => {
  const {
    state: { api, keyring, apiState, chainDecimal },
  } = usePolkadotJS();
  const [balances, setBalances] = useState<TBalances>({});

  useEffect(() => {
    const getBalances = async () => {
      if (keyring && api && apiState === "READY") {
        const accounts = keyring.getAccounts().map((key) => key.address) || [];
        try {
          await api.query.system.account.multi(accounts, (balances) => {
            const arr = balances
              .map((balance) => balance.toJSON())
              .reduce<TBalances>((acc, balance: any, index) => {
                acc[accounts[index]] = parseFloat(
                  (balance?.data?.free / Math.pow(10, chainDecimal)).toFixed(
                    chainDecimal
                  )
                );
                return acc;
              }, {});

            setBalances(arr);
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    getBalances();
  }, [api, apiState, keyring, chainDecimal]);

  return balances;
};

export default useTokenBalance;
