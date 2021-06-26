import React, { useContext, ChangeEvent } from 'react'
import { Tabs, withStyles, WithStyles, createStyles } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import { CategoryContext } from '../../../contexts/CategoryContext'
import Category from '../../../api/types/Category'
import CategoryTab from './CategoryTab'

const styles = () => {
  return createStyles({
    root: {
      flexBasis: '100%',
      backgroundColor: 'white',
      boxShadow: '0 0.1875rem 0.375rem 0.375rem #00000029',
    },
    flexContainer: {
      justifyContent: 'space-between',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const CategoryTabs = ({ classes }: Props) => {
  const { category, setCategory } = useContext(CategoryContext)!

  const {
    allStrapiCategories: { nodes: categories },
  } = useStaticQuery(graphql`
    {
      allStrapiCategories {
        nodes {
          slug
          name
        }
      }
    }
  `)

  const renderCategory = (category: Category): JSX.Element => {
    return <CategoryTab {...category} key={category.slug} />
  }

  const renderedCategories: JSX.Element[] = categories.map(renderCategory)

  const handleChange = (event: ChangeEvent<{}>, tabId: number): void => {
    setCategory(tabId)
  }

  return (
    <Tabs value={category} onChange={handleChange} classes={classes}>
      {renderedCategories}
    </Tabs>
  )
}

export default withStyles(styles)(CategoryTabs)
