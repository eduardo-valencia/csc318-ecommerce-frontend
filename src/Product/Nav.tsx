import React from 'react'
import Product from '../api/types/Product'

import BaseNav from '../components/Layout/Nav'

interface Props {
  name: Product['name']
}

export default function Nav({ name }: Props) {
  return <BaseNav title={name}></BaseNav>
}
