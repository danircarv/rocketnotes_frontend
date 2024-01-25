import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { MyContext } from "./myContext";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider
        value={{ name: "peidao", email: "rodrigo@email.com" }}
      >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
