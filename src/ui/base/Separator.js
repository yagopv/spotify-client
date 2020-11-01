import styled from 'styled-components/macro'
import { theme } from '../theme'

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  opacity: 0.5;
  background: ${theme.colors.darkGrey};
`
