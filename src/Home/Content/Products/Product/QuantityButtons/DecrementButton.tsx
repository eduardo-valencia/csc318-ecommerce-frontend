import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import ModifyQuantityButton from './ModifyQuantityButton'
import { QuantityButtonProps } from './types'

export default function DecrementButton(props: QuantityButtonProps) {
  return (
    <ModifyQuantityButton incrementAmount={-1} {...props}>
      <FontAwesomeIcon icon={faMinus} />
    </ModifyQuantityButton>
  )
}
