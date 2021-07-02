import Category from './Category'
import Thumbnail from './Thumbnail'
import Size from './Size'
import Color from './Color'

interface Product<ProductCategory = Category> {
  slug: string
  name: string
  thumbnail: Thumbnail
  category: ProductCategory
  price?: number
  images?: Thumbnail[]
}

export interface FullProduct extends Product {
  sizes: Size[]
  colors: Color[]
}

export default Product
