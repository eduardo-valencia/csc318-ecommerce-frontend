import React from 'react'
import { FullProduct } from '../../api/types/Product'

import Option from './Option'

interface Props {
  colors: FullProduct['colors']
}

export default function Color({ colors }: Props) {
  return <Option options={colors} label='Color'></Option>
}
