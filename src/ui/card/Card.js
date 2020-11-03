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
        <Text truncate={1} as="h5">
          {title}
        </Text>
        <Text truncate={1} as="p">
          {subtitle}
        </Text>
      </CardBody>
    </CardWrapper>
  )
}
