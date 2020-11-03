import React from 'react'
import { extractInfo } from '../../lib/helpers'
import { Flex, FlexItem, Text } from '../base'
import { TrackImage, TrackWrapper } from './styles'

function Track({ track }) {
  return (
    <TrackWrapper as="article" alignItems="center" p="sm">
      <TrackImage src={track?.imageUrl} alt={track?.title} />
      <FlexItem flex="1" px="md">
        <Text as="h4">{track?.title}</Text>
        <Text as="p">{track?.subtitle}</Text>
      </FlexItem>
      <Text as="h5">{track?.duration}</Text>
    </TrackWrapper>
  )
}

export default Track
