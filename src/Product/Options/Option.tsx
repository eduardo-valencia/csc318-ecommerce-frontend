import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Select,
  MenuItem,
  SelectProps,
  FormControl,
  InputLabel,
} from '@material-ui/core'

import Option from '../../api/types/Option'
import ArrowIcon from './ArrowIcon'

const styles = () => {
  const marginX: string = '1.3125rem'
  const paddingY: string = '1.3125rem'
  const paddingX: string = '1.125rem'
  return createStyles({
    root: {
      flexBasis: `calc(50% - ${marginX} / 2)`,
    },
    select: {
      borderRadius: '1.25rem',
      backgroundColor: '#ECEDED',
      boxShadow: '#00000029 0 0.125rem 0.375rem',
      fontSize: '1rem',
      paddingLeft: paddingX,
      paddingRight: paddingX,
    },
    input: {
      paddingTop: paddingY,
      paddingBottom: paddingY,
    },
    label: {
      color: 'black',
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<SelectProps, 'classes' | 'children' | 'label'> {
  options: Option[]
  label: string
}

const OptionItem = ({ classes, options, label, ...other }: Props) => {
  const renderOption = (option: Option): JSX.Element => {
    return <MenuItem value={option.id}>{option.name}</MenuItem>
  }

  const renderedOptions: JSX.Element[] = options.map(renderOption)

  return (
    <FormControl className={classes.root} variant='filled'>
      <InputLabel id={label} className={classes.label}>
        {label}
      </InputLabel>
      <Select
        labelId={label}
        className={classes.select}
        classes={{ root: classes.input }}
        variant='filled'
        fullWidth
        disableUnderline
        IconComponent={ArrowIcon}
        {...other}
      >
        {renderedOptions}
      </Select>
    </FormControl>
  )
}

export default withStyles(styles)(OptionItem)
