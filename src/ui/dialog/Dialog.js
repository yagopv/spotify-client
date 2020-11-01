import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Flex, Text } from '../base'
import { ModalContainer, ModalWrapper } from './styles'

export default function Dialog({ children, onCancel, onAccept }) {
  return ReactDOM.createPortal(
    <ModalContainer
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <ModalWrapper alignItems="center" direction="column">
        <Text as="h4" color="dark">
          {children}
        </Text>
        <Flex mt="xl">
          <Button background="bright" color="dark" onClick={onCancel}>
            Cancel
          </Button>
          <Button background="ko" ml="md" onClick={onAccept}>
            Accept
          </Button>
        </Flex>
      </ModalWrapper>
    </ModalContainer>,
    document.getElementById('root')
  )
}
