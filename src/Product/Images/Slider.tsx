import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import SingleSlider, {
  BaseProps as SingleSliderProps,
} from '../../components/SingleSlider'

const styles = () => {
  return createStyles({
    root: {},
  })
}

interface Props extends WithStyles<typeof styles>, SingleSliderProps {}

function Slider(props: Props) {
  return <SingleSlider {...props} />
}

export default withStyles(styles)(Slider)
