import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { PolkadotJSProvider } from "@polkadot/api-provider";
import ThemeProvider from "./theme";

const client = new QueryClient();
const GlobalStyle = createGlobalStyle({
  ".wrap": {
    maxWidth: "1366px",
    margin: "0 auto",
  },
  "*": {
    boxSizing: "border-box",
    fontFamily: "'Noto Sans SC', sans-serif",
  },
  a: {
    textDecoration: "none",
  },
  "body,p,h1,h2,h3,h4,h5,h6,figure": {
    margin: "0",
  },
  "input,button,video": {
    background: "none",
    outline: "none",
    border: "none",
    padding: "0",
  },
  "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "input[type='number']": {
    "-moz-appearance": "textfield",
  },
  "ul,li": {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  button: {
    cursor: "pointer",
  },
});

ReactDOM.render(
  <QueryClientProvider client={client}>
    <PolkadotJSProvider>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </PolkadotJSProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
