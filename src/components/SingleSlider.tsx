import React from 'react'
import BaseSlider from 'react-slick'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {},
  })
}

export interface BaseProps {
  children: React.ReactNode
}

interface Props extends WithStyles<typeof styles>, BaseProps {}

function Slider({ children, classes }: Props) {
  const slidesToShow: number = 1
  return (
    <BaseSlider
      dots
      infinite
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}
      arrows={false}
      className={classes.root}
    >
      {children}
    </BaseSlider>
  )
}

export default withStyles(styles)(Slider)
