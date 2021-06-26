import Product from '../api/types/Product'

export const getProductLink = (slug: Product['slug']): string =>
  `/products/${slug}`
