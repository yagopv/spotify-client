import React from 'react'
import { Flex } from '../base'
export default function WaitUntil({ condition, fallback, children }) {
  return (
    <>
      {condition ? (
        children
      ) : (
        <Flex alignItems="center" justifyContent="center" fullHeight>
          {fallback()}
        </Flex>
      )}
    </>
  )
}
