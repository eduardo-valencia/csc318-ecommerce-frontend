import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Item from './Item'
import Product from '../../api/types/Product'
import Thumbnail from '../../api/types/Thumbnail'
import Slider from './Slider'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '1.9375rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  images: Product['images']
}

const Images = ({ classes, images = [] }: Props) => {
  const renderImage = (image: Thumbnail, index: number): JSX.Element => {
    return <Item {...image} key={index} />
  }

  const renderedImages: JSX.Element[] = images.map(renderImage)

  return (
    <section className={classes.root}>
      <Slider>{renderedImages}</Slider>
    </section>
  )
}

export default withStyles(styles)(Images)
