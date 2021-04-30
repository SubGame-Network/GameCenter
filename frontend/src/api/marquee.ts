import { getAxiosInstance, api_response } from "./config";

const marquee = getAxiosInstance();

export interface IMarquee {
  type: string;
  address: string;
  SGP: string;
  room: string;
}

export const api_getMarquee = () => {
  return marquee.get<api_response<IMarquee[]>>(`/marquee`);
};
