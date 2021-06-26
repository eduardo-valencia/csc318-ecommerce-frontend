import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Layout from '../components/Layout'
import Nav from './Nav/index'
import Content from './Content'

const styles = () => {
  return createStyles({
    root: {},
  })
}

interface Props extends WithStyles<typeof styles> {}

function Home({ classes }: Props) {
  return (
    <Layout nav={<Nav />}>
      <Content />
    </Layout>
  )
}

export default withStyles(styles)(Home)
