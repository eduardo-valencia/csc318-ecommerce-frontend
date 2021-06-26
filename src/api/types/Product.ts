import Category from './Category'
import Thumbnail from './Thumbnail'

interface Product<ProductCategory = Category> {
  slug: string
  name: string
  thumbnail: Thumbnail
  category: ProductCategory
}

export default Product
