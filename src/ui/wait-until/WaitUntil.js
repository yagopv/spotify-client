import React from 'react'
import { Flex } from '../base'
export default function WaitUntil({ condition, fallback, children }) {
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      {condition ? children : fallback()}
    </Flex>
  )
}
