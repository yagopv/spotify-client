import React from 'react'
import { CardWrapper } from './styles'
import { Text } from '../base'

export default function Card({ item: { title, subtitle, imageUrl } }) {
  return (
    <CardWrapper>
      <img src={imageUrl} alt={title} />
      <Text>{title}</Text>
      <Text as="h5">{subtitle}</Text>
    </CardWrapper>
  )
}
