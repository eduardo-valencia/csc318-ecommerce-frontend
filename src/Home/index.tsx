import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../components/Layout'
import Nav from './Nav'

const styles = () => {
  return createStyles({
    root: {},
  })
}

interface Props extends WithStyles<typeof styles> {}

function Home({ classes }: Props) {
  return (
    <Layout nav={<Nav />}>
      <Typography>Hello, world</Typography>
    </Layout>
  )
}

export default withStyles(styles)(Home)
