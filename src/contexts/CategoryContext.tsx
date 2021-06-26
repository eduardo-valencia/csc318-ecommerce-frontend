import React, { createContext, useState, Dispatch } from 'react'

export type SelectedCategory = number
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
  const [category, setCategory] = useState<SelectedCategory>(0)

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
