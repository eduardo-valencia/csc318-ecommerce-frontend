import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import SingleSlider, { BaseProps } from '../../../components/SingleSlider'

const styles = () => {
  return createStyles({
    root: {
      '& .slick-slide': {
        padding: '1rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, BaseProps {
  children: React.ReactNode
}

function Slider(props: Props) {
  return <SingleSlider {...props} />
}

export default withStyles(styles)(Slider)
