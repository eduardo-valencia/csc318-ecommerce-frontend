import React from "react";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
