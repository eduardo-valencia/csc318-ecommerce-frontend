import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import ModifyQuantityButton from './ModifyQuantityButton'

export default function DecrementButton() {
  return (
    <ModifyQuantityButton incrementAmount={-1}>
      <FontAwesomeIcon icon={faMinus} />
    </ModifyQuantityButton>
  )
}
