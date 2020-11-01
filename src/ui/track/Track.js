import React from 'react'
import { extractInfo } from '../../lib/helpers'
import { Flex, FlexItem, Text } from '../base'

function Track({ track }) {
  const data = extractInfo(track)

  return (
    <Flex alignItems="center">
      <img src={data?.url} style={{ height: '40px' }} />
      <FlexItem flex="1">
        <Text>{data?.title}</Text>
        <Text as="h4">{data?.subtitle}</Text>
      </FlexItem>
      <Text>{data?.duration}</Text>
    </Flex>
  )
}

export default Track
