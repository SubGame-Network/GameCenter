import { useReducer } from "react";
import { ApiPromise } from "@polkadot/api";
import { KeyringStruct, KeyringAddress } from "@polkadot/ui-keyring/types";
import jsonrpc from "@polkadot/types/interfaces/jsonrpc";
import { DefinitionRpcExt } from "@polkadot/types/types";

import { DEFAULT_RPC_URL } from "./config";
export interface I_INIT_STATE {
  nodeURL: string;
  currentAccount: KeyringAddress | null;
  keyring: KeyringStruct | null;
  keyringState: "LOADING" | "READY" | "ERROR" | null;
  keyringError: any | null;
  api: ApiPromise | null;
  apiError: any | null;
  jsonrpc: Record<string, Record<string, DefinitionRpcExt>>;
  apiState: "CONNECT_INIT" | "READY" | "ERROR" | "CONNECTING" | null;
  chainToken: string;
  chainDecimal: number;
}

export type Actions =
  | { type: "CONNECT_INIT" }
  | { type: "CONNECT_SUCCESS"; payload: ApiPromise }
  | { type: "LOAD_KEYRING" }
  | { type: "CONNECTING" }
  | { type: "SET_KEYRING"; payload: KeyringStruct }
  | { type: "CONNECT_ERROR"; payload: any }
  | { type: "KEYRING_ERROR"; payload: any }
  | { type: "CHANGE_RPC"; payload: string }
  | { type: "CHANGE_ACCOUNT"; payload: KeyringAddress };

export const INIT_STATE: I_INIT_STATE = {
  nodeURL: DEFAULT_RPC_URL,
  currentAccount: null,
  keyring: null,
  keyringState: null,
  keyringError: null,
  api: null,
  apiError: null,
  apiState: null,
  chainToken: "DOT",
  chainDecimal: 10,
  jsonrpc: { ...jsonrpc },
};

const reducer = (state: I_INIT_STATE, action: Actions): I_INIT_STATE => {
  switch (action.type) {
    case "CONNECT_INIT":
      return { ...state, apiState: "CONNECT_INIT" };

    case "CONNECTING":
      return { ...state, apiState: "CONNECTING" };

    case "CONNECT_SUCCESS":
      const chainTokens = action.payload.registry.chainTokens;
      const chainDecimals = action.payload.registry.chainDecimals;

      let chainToken = "DOT";
      let chainDecimal = 10;

      if (chainTokens && chainTokens.length > 0) {
        chainToken = chainTokens[0];
      }

      if (chainDecimals && chainDecimals.length > 0) {
        chainDecimal = chainDecimals[0];
      }

      return {
        ...state,
        api: action.payload,
        chainToken,
        chainDecimal,
        apiState: "READY",
      };

    case "CONNECT_ERROR":
      return { ...state, apiState: "ERROR", apiError: action.payload };

    case "LOAD_KEYRING":
      return { ...state, keyringState: "LOADING" };

    case "SET_KEYRING":
      const accounts = action.payload.getAccounts();
      const defaultAccount = accounts.find(
        (v) => v.address === localStorage.getItem("user_address")
      );

      return {
        ...state,
        ...(accounts.length > 0
          ? {
              currentAccount: defaultAccount || action.payload.getAccounts()[0],
            }
          : {}),
        keyring: action.payload,
        keyringState: "READY",
      };

    case "KEYRING_ERROR":
      return {
        ...state,
        keyring: null,
        keyringState: "ERROR",
        keyringError: action.payload,
      };

    case "CHANGE_ACCOUNT":
      localStorage.setItem("user_address", action.payload.address);
      return {
        ...state,
        currentAccount: action.payload,
      };

    case "CHANGE_RPC":
      return {
        ...state,
        nodeURL: action.payload,
        api: null,
        apiError: null,
        apiState: null,
        chainToken: "DOT",
        chainDecimal: 10,
      };
  }
};

const _useReducer = () => useReducer(reducer, INIT_STATE);

export default _useReducer;
