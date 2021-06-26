import React, { useContext } from 'react'
import {
  Container,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core'
import { CategoryContext } from '../../contexts/CategoryContext'
import { useStaticQuery, graphql } from 'gatsby'

import Category from '../../api/types/Category'
import Product from '../../api/types/Product'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const Content = ({ classes }: Props) => {
  const { category } = useContext(CategoryContext)!

  const {
    allStrapiCategories: { nodes: categories },
    allStrapiProducts: { nodes: products },
  } = useStaticQuery(graphql`
    {
      allStrapiCategories {
        nodes {
          slug
        }
      }
      allStrapiProducts {
        nodes {
          category {
            slug
          }
          name
          thumbnail {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          slug
        }
      }
    }
  `)

  const getIfProductHasSelectedCategory = (product: Product): boolean => {
    const selectedCategory: Category = categories[category]
    const { slug } = selectedCategory
    return product.category.slug === slug
  }

  const productsForCategory: Product[] = products.filter(
    getIfProductHasSelectedCategory
  )

  console.log('productsForCategory', productsForCategory)

  return <Container>Hello</Container>
}

export default withStyles(styles)(Content)
