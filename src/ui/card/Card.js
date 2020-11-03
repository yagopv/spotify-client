import React from 'react'
import { CardImage, CardWrapper, CardBody, SVGContainer } from './styles'
import { Text } from '../base'
import { ReactComponent as Placeholder } from '../../lib/assets/placeholder.svg'
export default function Card({ item: { title, subtitle, imageUrl } }) {
  return (
    <CardWrapper>
      {imageUrl ? (
        <CardImage src={imageUrl} />
      ) : (
        <SVGContainer>
          <Placeholder />
        </SVGContainer>
      )}
      <CardBody>
        <Text>{title}</Text>
        <Text as="h5">{subtitle}</Text>
      </CardBody>
    </CardWrapper>
  )
}
