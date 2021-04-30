import { useQuery } from "react-query";
import format from "date-fns/format";
import { api_getSwapDetail } from "../../api/swap";

export const formatTimeToISO = (
  from: Date | null | undefined,
  to: Date | null | undefined
) => {
  return {
    from: from ? `${format(from, "yyyy-MM-dd")}T00:00:00Z` : null,
    to: `${format(to ? to : new Date(), "yyyy-MM-dd")}T23:59:59Z`,
  };
};

export const useApiGetSwapDetail = (
  address: string,
  fromDate: Date | null,
  toDate: Date | null,
  enabled?: boolean
) => {
  const { from, to } = formatTimeToISO(fromDate, toDate);

  return useQuery(
    ["swapDetail", address, from, to],
    () => api_getSwapDetail(address, from, to),
    {
      enabled,
    }
  );
};
