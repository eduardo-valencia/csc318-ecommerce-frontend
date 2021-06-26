import React, { createContext, useState, Dispatch } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export type SelectedCategory = string
type SetCategory = Dispatch<React.SetStateAction<SelectedCategory>>

export interface ContextValue {
  category: SelectedCategory
  setCategory: SetCategory
}

export const CategoryContext = createContext<ContextValue | null>(null)

interface Props {
  children: React.ReactNode
}

const CategoryContextProvider = ({ children }: Props) => {
  const {
    allStrapiCategories: {
      nodes: [{ slug: firstCategorySlug }],
    },
  } = useStaticQuery(graphql`
    query Categories {
      allStrapiCategories {
        nodes {
          slug
        }
      }
    }
  `)

  const [category, setCategory] = useState<SelectedCategory>(firstCategorySlug)

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
