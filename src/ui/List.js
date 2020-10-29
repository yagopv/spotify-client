import styled from 'styled-components/macro'
import { withColorProps, withSpacingProps } from './utils'

export const List = styled.ul`
  list-style-type: none;
  ${withColorProps}
  ${withSpacingProps}
`

export const ListItem = styled.li`
  ${withColorProps}
  ${withSpacingProps}
  cursor: pointer;
`
