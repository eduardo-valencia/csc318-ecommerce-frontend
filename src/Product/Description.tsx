import React from 'react'
import {
  Typography,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core'

import { FullProduct } from '../api/types/Product'
import RichText from '../components/RichText'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  description: FullProduct['description']
}

const Description = ({ classes, description }: Props) => {
  return (
    <section>
      <Typography variant='h2'>Description</Typography>
      <RichText content={description} />
    </section>
  )
}

export default withStyles(styles)(Description)
