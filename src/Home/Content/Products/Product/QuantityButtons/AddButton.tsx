import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import IncrementButton from './ModifyQuantityButton'
import { QuantityButtonProps } from './types'

export default function AddButton(props: QuantityButtonProps) {
  return (
    <IncrementButton incrementAmount={1} {...props}>
      <FontAwesomeIcon icon={faPlus} />
    </IncrementButton>
  )
}
