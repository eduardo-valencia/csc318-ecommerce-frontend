import React from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from "@material-ui/core";

const styles = () => {
  return createStyles({
    root: {},
  });
};

interface Props extends WithStyles<typeof styles> {}

function Home({ classes }: Props) {
  return (
    <div>
      <Typography>Hello, world</Typography>
    </div>
  );
}

export default withStyles(styles)(Home);
