import styled from 'styled-components/macro'
import { theme } from '../theme'
import { Text } from './Text'

export const ValidationMessage = styled(Text)`
  position: absolute;
  top: 75px;
  font-size: 0.8rem;
  color: ${theme.colors.red};
`
