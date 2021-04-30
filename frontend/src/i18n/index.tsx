import React, { useState, useEffect } from "react";
import { IntlProvider as RtlIntlProvider } from "react-intl";

import cn from "./cn.json";
import en from "./en.json";

interface Props {
  locale: string;
}

const IntlProvider: React.FunctionComponent<Props> = ({ locale, children }) => {
  const [message, setMessage] = useState<any>({});

  useEffect(() => {
    switch (true) {
      case locale.includes("en"):
        setMessage(en);
        break;
      case locale.includes("CN"):
        setMessage(cn);
        break;
    }
  }, [locale]);

  return (
    <RtlIntlProvider locale={locale} messages={message} onError={() => {}}>
      {children}
    </RtlIntlProvider>
  );
};

export default IntlProvider;
