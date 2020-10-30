import styled from 'styled-components/macro'
import {
  withSpacingProps,
  withAlignmentProps,
  withOverflowProps,
  withColorProps,
} from './utils'

export const Box = styled.div`
  ${withSpacingProps}
  ${withAlignmentProps}
  ${withOverflowProps}
  ${withColorProps}
`
