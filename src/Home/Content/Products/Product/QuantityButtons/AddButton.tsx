import React, { MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import IncrementButton from './ModifyQuantityButton'

export default function AddButton() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <IncrementButton incrementAmount={1} onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} />
    </IncrementButton>
  )
}
