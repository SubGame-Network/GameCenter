import { useEffect } from "react";
import { useQueryClient } from "react-query";

const useListenNewData = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!!window.WebSocket) {
      const connect = () => {
        let url: string = `ws://${window.location.hostname}/websocket/v1/echo`;

        if (process.env.NODE_ENV === "development") {
          url = `wss://subgameservice.guanfantech.com/websocket/v1/echo`;
        }

        const webSocket = new WebSocket(url);

        webSocket.onopen = () => {
          console.log("starting to listen new data");
        };
        webSocket.onclose = () => {
          console.log("stop to listen new data");
          setTimeout(() => connect(), 1000);
        };
        webSocket.onmessage = (evt: MessageEvent<any>) => {
          const received_data = JSON.parse(evt.data);

          if (received_data.type === "guessHashCreateGame") {
            queryClient.refetchQueries("gameCenter");
          }
          if (received_data.type === "guessHashBet") {
            const room = JSON.parse(received_data.data);
            queryClient.refetchQueries(["gameInfo", room]);
          }
        };

        window.onbeforeunload = function () {
          webSocket.onclose = () => {};
          webSocket.close();
        };
      };
      connect();
    }
  }, [queryClient]);
};

export default useListenNewData;
