import styled from 'styled-components/macro'
import { Flex } from '../base'
import { theme } from '../theme'

export const ModalContainer = styled(Flex)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.darkGrey};
  align-items: center;
`

export const ModalWrapper = styled(Flex)`
  padding: 1rem;
  background: ${theme.colors.yellow};
`
