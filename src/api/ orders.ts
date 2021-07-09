import apiConfig from './config'
import { Token } from 'react-stripe-checkout'
import { CartItem } from '../contexts/CartContext'

interface OrderData {
  name: string
  token: Token
  products: CartItem[]
}

export const createOrder = (orderData: OrderData) => {
  return apiConfig.post('/orders', orderData)
}
