import React, { useState } from 'react'

import Product from '../api/types/Product'
import { getItemFinder } from '../utils/find'

type Quantity = number

export interface CartItem {
  slug: Product['slug']
  quantity: Quantity
}

export type Cart = CartItem[]

type QuantityModifier = (product: Product['slug'], quantity: Quantity) => void

export interface ContextValue {
  cart: Cart
  addToCart: QuantityModifier
  decreaseQuantity: QuantityModifier
  removeItem: (product: Product['slug']) => void
  clearCart: () => void
  findItem: (product: Product['slug']) => CartItem | undefined
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

  const decreaseQuantity = (
    product: Product['slug'],
    quantity: Quantity = -1
  ): void => {
    const existingItem: CartItem | undefined = findItem(product)
    if (existingItem) {
      return alterItemQuantity(product, quantity)
    }
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
        cart,
        findItem,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
