import { DefinitionRpcExt } from "@polkadot/types/types/definitions";
import { SubGameNode } from "config/config.json";
const DAPP_NAME = "Sub Game Center";

const RPC_URLS: { [netWork: string]: string } = {
  Polkadot: "wss://polkadot.api.onfinality.io/public-ws",
  Westend: "wss://westend-rpc.polkadot.io",
  Local: "ws://127.0.0.1:9944",
};

const TYPES: { [name: string]: string | { [name: string]: string } } = {
  GameIndex: "u32",
  GameMode: "u8",
  CommodityId: "u128",
  CommodityInfo: "Vec<u8>",
  CommodityLimit: "u128",
  UserCommodityLimit: "u64",
  ChipBalance: "u128",
  ChipsDetail: {
    balance: "u128",
    reserve: "u128",
  },
  GameInfo: {
    owner: "AccountId",
    block_number: "u32",
    bet_block_number: "u32",
    amount: "u128",
  },
  BetInfo: {
    user: "AccountId",
    game_id: "u32",
    amount: "u128",
    game_mode: "u8", // 1 = odd , 2 = even
  },
};

const CUSTOM_RPC: Record<string, Record<string, DefinitionRpcExt>> = {};

const DEFAULT_RPC_URL = SubGameNode || "ws://127.0.0.1:9944";

const DEFAULT_CONNECT_WALLET = false;

export {
  RPC_URLS,
  TYPES,
  CUSTOM_RPC,
  DEFAULT_RPC_URL,
  DAPP_NAME,
  DEFAULT_CONNECT_WALLET,
};
