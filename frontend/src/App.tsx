import React, { useState, createContext, useEffect } from "react";
import { Cookies } from "react-cookie";
import Feedback, {
  IFeedBackData,
  TType,
  TMessage,
  TMessageValues,
} from "./components/Feedback";
import ConnectPopUp from "./components/ConnectPopUp";
import IntlProvider from "./i18n";
import Router from "./routers/Router";

import useListenNewData from "hooks/useApi/useListenNewData";

const Cookie = new Cookies();
interface IAppContext {
  Cookie: Cookies;
  locale: string;
  setLocale: (a: string) => void;
  showFeedBack: (
    type: TType,
    message?: TMessage,
    messageValues?: TMessageValues
  ) => void;
  isWhiteMode: boolean;
  changeMode: (a?: any) => void;
  setConnectPopUpShow: (a: boolean) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

function App() {
  const [locale, setLocale] = useState(Cookie.get("oas_locale") || "en");
  const [isWhiteMode, setIsWhiteMode] = useState(true);
  const [feedbackShow, setFeedbackShow] = useState(false);
  const [connectPopUpShow, setConnectPopUpShow] = useState(false);
  const [feedbackProps, setFeedbackProps] = useState<IFeedBackData>({
    type: "Submitted",
  });
  useListenNewData();
  const showFeedBack = (
    type: TType,
    message?: TMessage,
    messageValues?: TMessageValues
  ) => {
    setFeedbackProps({
      type,
      message,
      messageValues,
    });
    setFeedbackShow(true);
  };
  const changeMode = () => {
    setIsWhiteMode(!isWhiteMode);
    Cookie.set("isWhiteMode", !isWhiteMode ? "Y" : "N");
  };
  useEffect(() => {
    if (!Cookie.get("isWhiteMode") || Cookie.get("isWhiteMode") === "Y") {
      setIsWhiteMode(true);
    } else {
      setIsWhiteMode(false);
    }
  }, []);
  return (
    <IntlProvider locale={locale}>
      <AppContext.Provider
        value={{
          Cookie,
          locale,
          setLocale,
          showFeedBack,
          isWhiteMode,
          changeMode,
          setConnectPopUpShow,
        }}
      >
        {feedbackShow && (
          <Feedback setFeedbackShow={setFeedbackShow} {...feedbackProps} />
        )}
        {connectPopUpShow && (
          <ConnectPopUp setConnectPopUpShow={setConnectPopUpShow} />
        )}

        <Router />
      </AppContext.Provider>
    </IntlProvider>
  );
}

export default App;
