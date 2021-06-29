import React, { useState } from 'react'

import Product from '../api/types/Product'
import { getItemFinder } from '../utils/find'

type Quantity = number

export interface CartItem {
  slug: Product['slug']
  quantity: Quantity
}

export type Cart = CartItem[]

export interface ContextValue {
  cart: Cart
  addToCart: (product: Product['slug'], quantity: Quantity) => void
  removeItem: (product: Product['slug']) => void
  clearCart: () => void
  alterQuantity: (product: Product['slug'], quantity: Quantity) => void
}

export const CartContext = React.createContext<ContextValue | null>(null)

interface Props {
  children: React.ReactNode
}

export default function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<Cart>([])

  const findItem = getItemFinder<CartItem>(cart)

  const getIfItemDoesNotHaveSlug =
    (slug: Product['slug']) =>
    (item: CartItem): boolean => {
      return item.slug !== slug
    }

  const filterOutItem = (slug: Product['slug']): Cart => {
    return cart.filter(getIfItemDoesNotHaveSlug(slug))
  }

  const alterItemQuantity = (
    product: Product['slug'],
    quantity: Quantity
  ): void => {
    const cartItem: CartItem | undefined = findItem(product)
    if (!cartItem) throw new Error('Cart item not found.')

    const newQuantity = cartItem.quantity + quantity
    const cartWithoutItem: Cart = filterOutItem(product)
    if (newQuantity <= 0) {
      return setCart(cartWithoutItem)
    }
    const newItem: CartItem = {
      ...cartItem,
      quantity: newQuantity,
    }
    setCart([...cartWithoutItem, newItem])
  }

  const addNewProduct = (slug: Product['slug'], quantity: Quantity): void => {
    const cartItem: CartItem = {
      slug,
      quantity: quantity,
    }
    const newCart: Cart = [...cart, cartItem]
    setCart(newCart)
  }

  const addToCart = (slug: Product['slug'], quantity: Quantity = 1): void => {
    const existingItem: CartItem | undefined = findItem(slug)
    if (existingItem) {
      return alterItemQuantity(slug, quantity)
    }
    return addNewProduct(slug, quantity)
  }

  const removeItem = (slug: Product['slug']): void => {
    const cartWithoutItem: Cart = filterOutItem(slug)
    setCart(cartWithoutItem)
  }

  const clearCart = (): void => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        clearCart,
        removeItem,
        addToCart,
        alterQuantity: alterItemQuantity,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
