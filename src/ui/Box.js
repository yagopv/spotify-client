import styled from 'styled-components/macro'
import {
  withSpacingProps,
  withAlignmentProps,
  withOverflowProps,
} from './utils'

export const Box = styled.div`
  ${withSpacingProps}
  ${withAlignmentProps}
  ${withOverflowProps}
`
