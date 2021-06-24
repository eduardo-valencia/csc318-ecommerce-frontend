import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {},
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
        boxShadow: "none",
      },
    },
  },
});

theme.overrides.MuiButton.containedPrimary = {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
};

export default theme;
