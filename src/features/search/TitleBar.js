import React from 'react'
import { Flex, FlexItem, Link, Text } from '../../ui/base'

export default function TitleBar({ title, onShowAll }) {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <Text as="h4">{title}</Text>
        {onShowAll && (
          <FlexItem flex="1" textAlign="right">
            <Link to="#" textAlign="right" onClick={onShowAll}>
              Show All
            </Link>
          </FlexItem>
        )}
      </Flex>
    </Flex>
  )
}
