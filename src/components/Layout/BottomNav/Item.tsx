import React from 'react'
import { Theme, withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const styles = ({
  palette: {
    primary: { contrastText },
  },
}: Theme) => {
  return createStyles({
    root: {
      listStyle: 'none',
    },
    icon: {
      color: contrastText,
      fontSize: '1.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  href: string
  icon: IconProp
}

const Item = ({ classes, href, icon }: Props) => {
  return (
    <li className={classes.root}>
      <Link to={href}>
        <FontAwesomeIcon icon={icon} className={classes.icon} />
      </Link>
    </li>
  )
}

export default withStyles(styles)(Item)
