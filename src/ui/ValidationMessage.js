import styled from 'styled-components/macro'
import { Text } from './Text'
import { color } from './theme'

export const ValidationMessage = styled(Text)`
  position: absolute;
  top: 75px;
  font-size: 0.8rem;
  color: ${color('ko')};
`
