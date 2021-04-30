import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

import { usePolkadotJS } from "@polkadot/api-provider";

import { api_getMarquee } from "../../api/marquee";
import sliceAddress from "utils/sliceAddress";

interface MarqueeData {
  type: string;
  address: string;
  SGP: string;
  room: string;
}

const useMarquee = () => {
  const [data, setData] = useState<string[]>([]);
  const queryClient = useQueryClient();
  const {
    state: { currentAccount },
  } = usePolkadotJS();
  useEffect(() => {
    if (!!window.WebSocket) {
      const connect = () => {
        let url: string = `ws://${window.location.hostname}/websocket/v1/echo`;
        if (process.env.NODE_ENV === "development") {
          url = `wss://subgameservice.guanfantech.com/websocket/v1/echo`;
        }

        const webSocket = new WebSocket(url);

        webSocket.onopen = () => {
          console.log("WebSocket connection succeeded");
        };
        webSocket.onclose = () => {
          console.log("WebSocket connection closed");
          setTimeout(() => connect(), 1000);
        };

        webSocket.onmessage = (evt: MessageEvent<any>) => {
          const received_data = JSON.parse(evt.data);
          if (received_data.type === "marquee") {
            const data: MarqueeData = JSON.parse(received_data.data);

            if (currentAccount?.address === data.address) {
              queryClient.refetchQueries("SGPBalance");
            }

            const msg = `${sliceAddress(data.address)} WIN ${data.SGP} SGP at ${
              data.type
            } ${data.room}`;

            setData((prevData) => {
              return [msg, ...prevData];
            });
          }
        };

        window.onbeforeunload = function () {
          webSocket.onclose = () => {};
          webSocket.close();
        };
      };
      connect();
    }
  }, [currentAccount?.address, queryClient]);

  useEffect(() => {
    api_getMarquee()
      .then((res) => {
        if (res?.data.data) {
          setData(
            res?.data.data?.map(
              (v) => `${v.address} WIN ${v.SGP} SGP at ${v.type} ${v.room}`
            )
          );
        }
      })
      .catch(console.error);
  }, []);

  return {
    data,
  };
};

export default useMarquee;
