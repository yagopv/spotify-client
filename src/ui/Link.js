import styled, { css } from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'
import { color, fontFamily } from './theme'

export const linkMixin = css`
  font-family: ${fontFamily('primary')};
  color: ${color('yellow')};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`

export const Link = styled(RouterLink)`
  ${linkMixin}
`
