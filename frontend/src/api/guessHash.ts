import { getAxiosInstance, api_response } from "./config";
import {
  IApi_getGameCenter_response,
  IApi_getHistoryPlayer_response,
  IApi_getHistoryBookmaker,
  IApi_getHistoryDetails,
} from "./types/GuessHash";
import { GameInfo_respone } from "./types/GameInfo";

const guessHash = getAxiosInstance();

export const api_getGameCenter = () => {
  return guessHash.get<api_response<IApi_getGameCenter_response[]>>(
    "/guess-hash/game-center"
  );
};

export const api_getGameInfo = (room: string | number) => {
  return guessHash.get<api_response<GameInfo_respone>>(
    `/guess-hash/game-info/${room}`
  );
};

export const api_getHistoryPlayer = (
  from: string | null,
  to: string,
  address?: string
) => {
  return guessHash.get<api_response<IApi_getHistoryPlayer_response[]>>(
    `/guess-hash/history/player?to=${to}${from ? `&from=${from}` : ""}${
      address ? `&address=${address}` : ""
    }`
  );
};

export const api_getHistoryBookmaker = (
  from: string | null,
  to: string,
  address?: string
) => {
  return guessHash.get<api_response<IApi_getHistoryBookmaker[]>>(
    `/guess-hash/history/bookmaker?to=${to}${from ? `&from=${from}` : ""}${
      address ? `&address=${address}` : ""
    }`
  );
};

export const api_getHistoryDetails = (room: string | number) => {
  return guessHash.get<api_response<IApi_getHistoryDetails>>(
    `/guess-hash/history/details/${room}`
  );
};
