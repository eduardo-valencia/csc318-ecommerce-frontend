import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Thumbnail from '../../api/types/Thumbnail'

const styles = () => {
  const borderRadius = '1.25rem'
  return createStyles({
    root: {
      backgroundColor: 'white',
      // boxShadow: '#00000029 0 0.1875rem 0.375rem',
      borderRadius,
    },
    image: {
      width: '100%',
      borderRadius,
    },
  })
}

interface Props extends WithStyles<typeof styles>, Thumbnail {}

const Item = ({ classes, alternativeText, localFile }: Props) => {
  const image = getImage(localFile)
  return (
    <div className={classes.root}>
      <GatsbyImage
        image={image}
        alt={alternativeText}
        className={classes.image}
      />
    </div>
  )
}

export default withStyles(styles)(Item)
