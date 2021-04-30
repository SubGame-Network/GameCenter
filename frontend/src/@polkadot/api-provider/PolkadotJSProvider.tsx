import React, { useEffect, createContext, useRef, useCallback } from "react";
import { KeyringAddress } from "@polkadot/ui-keyring/types";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import keyring from "@polkadot/ui-keyring";

import { connect } from "./utils";
import useReducer, { I_INIT_STATE } from "./useReducer";
import { DEFAULT_CONNECT_WALLET, DAPP_NAME } from "./config";

interface Types {
  state: I_INIT_STATE;
  changeRPC: (url: string) => void;
  changeAccount: (account: KeyringAddress) => void;
  connectToWallet: () => Promise<void>;
}

export const Context = createContext<Types>({} as Types);

const PolkadotJSProvider: React.FunctionComponent = ({ children }) => {
  const loadAccount = useRef(false);
  const [state, dispatch] = useReducer();

  const changeRPC = async (url: string) => {
    if (state.api) await state.api.disconnect();
    dispatch({ type: "CHANGE_RPC", payload: url });
  };

  const changeAccount = async (account: KeyringAddress) => {
    dispatch({ type: "CHANGE_ACCOUNT", payload: account });
  };

  const connectToWallet = useCallback(async () => {
    // loadAccounts 只執行一次
    if (!loadAccount.current) {
      loadAccount.current = true;
      if (!!state.keyring || state.keyringState) return;
      try {
        const exts = await web3Enable(DAPP_NAME);

        if (exts.length === 0) {
          throw new Error("extension not Find");
        }

        try {
          const allAccounts = await web3Accounts();
          keyring.loadAll({}, allAccounts);
          localStorage.setItem("isLoadAccountSuccess", "1");
          dispatch({ type: "SET_KEYRING", payload: keyring });
        } catch (error) {
          dispatch({ type: "KEYRING_ERROR", payload: error });
        }
      } catch (error) {
        dispatch({ type: "KEYRING_ERROR", payload: error });
      }
    }
  }, [state.keyring, state.keyringState]);

  useEffect(() => {
    connect(state, dispatch);

    // loadAccounts 只執行一次
    if (
      DEFAULT_CONNECT_WALLET ||
      localStorage.getItem("isLoadAccountSuccess") === "1"
    ) {
      connectToWallet();
    }
  }, [state, dispatch, connectToWallet]);

  const value = {
    state,
    changeRPC,
    changeAccount,
    connectToWallet,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default PolkadotJSProvider;
