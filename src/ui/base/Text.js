import styled, { css } from 'styled-components/macro'
import { theme } from '../theme'
import { Box } from './Box'
import { space } from '../helpers'

function isHeading(type) {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type)
}

const truncatedMixin = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const truncatedMultilineMixin = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Text = styled(Box)`
  color: ${props =>
    theme.colors[props.color] ||
    (isHeading(props.as) ? theme.colors.lightGrey : theme.colors.darkGrey)};
  font-weight: ${props => (isHeading(props.as) ? '900' : '400')}
  font-family: ${props =>
    theme.fontFamily[props.fontFamily] ||
    (isHeading(props.as)
      ? theme.fontFamily.secondary
      : theme.fontFamily.primary)};
  font-size:  ${props => theme.fontSize[props.as] || '0.8rem'};
  text-transform:  ${props =>
    props.textTransform || (isHeading(props.as) ? 'uppercase' : 'none')};
  line-height: ${props => isHeading(props.as) && '2rem'};
  ${props => props.truncate === 1 && truncatedMixin}
  ${props => props.truncate > 1 && truncatedMultilineMixin}
  ${space}
`
