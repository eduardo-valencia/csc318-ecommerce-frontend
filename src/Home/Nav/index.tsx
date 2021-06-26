import React from 'react'

import BaseNav from '../../components/Layout/Nav'
import CategoryTabs from './CategoryTabs'

export default function Nav() {
  return (
    <BaseNav title='Home'>
      <CategoryTabs />
    </BaseNav>
  )
}
