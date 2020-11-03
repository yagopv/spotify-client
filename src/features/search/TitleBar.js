import React from 'react'
import { Flex, FlexItem, Link, Text } from '../../ui/base'
import { TitleBarLink } from './styles'

export default function TitleBar({ title, onShowAll }) {
  return (
    <Flex flexDirection="column" mt="lg" mb="md">
      <Flex alignItems="center">
        <Text as="h4" color="yellow">
          {title}
        </Text>
        {onShowAll && (
          <FlexItem flex="1" textAlign="right">
            <TitleBarLink to="#" onClick={onShowAll}>
              Show All
            </TitleBarLink>
          </FlexItem>
        )}
      </Flex>
    </Flex>
  )
}
