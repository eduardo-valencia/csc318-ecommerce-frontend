import React from 'react'
import BaseSlider from 'react-slick'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      '& .slick-slide': {
        padding: '1rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

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
