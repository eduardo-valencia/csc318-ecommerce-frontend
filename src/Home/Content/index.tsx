import React, { useContext } from 'react'
import {
  Container,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import { CategoryContext } from '../../contexts/CategoryContext'
import Category from '../../api/types/Category'
import Product from '../../api/types/Product'
import FeaturedProducts from './FeaturedProducts'
import Products from './Products'

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
          name
        }
      }
      allStrapiProducts {
        nodes {
          category {
            slug
          }
          name
          price
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

  return (
    <section>
      <FeaturedProducts products={productsForCategory} />
      <Products products={productsForCategory} />
    </section>
  )
}

export default withStyles(styles)(Content)
