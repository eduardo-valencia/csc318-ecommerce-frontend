import React from 'react'
import BaseSlider from 'react-slick'

interface Props {
  children: React.ReactNode
}

export default function Slider({ children }: Props) {
  const slidesToShow: number = 1
  return (
    <BaseSlider
      dots
      infinite
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}
    >
      {children}
    </BaseSlider>
  )
}
