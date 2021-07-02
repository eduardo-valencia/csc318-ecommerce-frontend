import Category from './Category'
import Thumbnail from './Thumbnail'

interface Product<ProductCategory = Category> {
  slug: string
  name: string
  thumbnail: Thumbnail
  category: ProductCategory
  price?: number
  images?: Thumbnail[]
}

export default Product
