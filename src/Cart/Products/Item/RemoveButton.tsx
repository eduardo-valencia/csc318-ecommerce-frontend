import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Button } from '@material-ui/core'
import { CartContext } from '../../../contexts/CartContext'
import Product from '../../../api/types/Product'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  slug: Product['slug']
}

const RemoveButton = ({ classes, slug }: Props) => {
  const { removeItem } = useContext(CartContext)!

  const handleClick = () => {
    removeItem(slug)
  }

  return (
    <Button onClick={handleClick} variant='text' classes={classes}>
      Remove
    </Button>
  )
}

export default withStyles(styles)(RemoveButton)
