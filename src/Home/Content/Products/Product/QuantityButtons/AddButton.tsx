import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import IncrementButton from './ModifyQuantityButton'

export default function AddButton() {
  return (
    <IncrementButton incrementAmount={1}>
      <FontAwesomeIcon icon={faPlus} />
    </IncrementButton>
  )
}
