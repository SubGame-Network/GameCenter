import React from "react";
import { render as rtlRender } from "@testing-library/react";
import IntlProvider from "../i18n";
import ThemeProvider from "../theme";

function render(ui, { locale = "en", ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <IntlProvider locale="en">
        <ThemeProvider>{children}</ThemeProvider>
      </IntlProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
