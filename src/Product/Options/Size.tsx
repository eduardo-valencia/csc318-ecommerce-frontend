import React from 'react'
import { FullProduct } from '../../api/types/Product'

import Option from './Option'

interface Props {
  sizes: FullProduct['sizes']
}

export default function Size({ sizes }: Props) {
  return <Option options={sizes} label='Size'></Option>
}
