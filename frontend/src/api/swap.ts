import { getAxiosInstance, api_response } from "./config";

const swap = getAxiosInstance();

export interface ISwapDetail {
  type: string;
  address: string;
  SGBChange: string;
  SGPBalance: string;
  SGPChange: string;
  txHash: string;
  timestamp: string;
}

export const api_getSwapDetail = (
  address: string,
  from: string | null,
  to: string
) => {
  return swap.get<api_response<ISwapDetail[]>>(
    `/swap/details/${address}?to=${to}${from ? `&from=${from}` : ""}`
  );
};
