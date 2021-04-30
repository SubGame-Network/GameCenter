import { useQuery } from "react-query";
import {
  api_getGameCenter,
  api_getGameInfo,
  api_getHistoryPlayer,
  api_getHistoryBookmaker,
  api_getHistoryDetails,
} from "../../api/guessHash";
import { formatTimeToISO } from "./useSwap";

export const useApiGetGameCenter = (enabled?: boolean) => {
  return useQuery(["gameCenter"], api_getGameCenter, {
    enabled,
  });
};
export const useApiGetGameInfo = (room: number, enabled?: boolean) => {
  return useQuery(["gameInfo", room], () => api_getGameInfo(room), {
    enabled,
  });
};
export const useApiGetHistoryPlayer = (
  fromDate: Date | null,
  toDate: Date | null,
  address?: string | undefined,
  enabled?: boolean
) => {
  const { from, to } = formatTimeToISO(fromDate, toDate);
  return useQuery(
    ["history", "Player", from, to, address],
    () => api_getHistoryPlayer(from, to, address),
    {
      enabled,
    }
  );
};
export const useApiGetHistoryBookmaker = (
  fromDate: Date | null,
  toDate: Date | null,
  address?: string | undefined,
  enabled?: boolean
) => {
  const { from, to } = formatTimeToISO(fromDate, toDate);
  return useQuery(
    ["history", "Bookmaker", from, to, address],
    () => api_getHistoryBookmaker(from, to, address),
    {
      enabled,
    }
  );
};
export const useApiGetHistoryDetails = (room: number, enabled?: boolean) => {
  return useQuery(
    ["history", "Details", room],
    () => api_getHistoryDetails(room),
    {
      enabled,
    }
  );
};
