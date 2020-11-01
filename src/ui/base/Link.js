import styled, { css } from 'styled-components/macro'
import { NavLink as RouterLink } from 'react-router-dom'
import { theme } from '../theme'

export const linkMixin = css`
  font-family: ${theme.fontFamily.primary};
  color: ${theme.colors.yellow};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`

export const Link = styled(RouterLink)`
  ${linkMixin}
`

export const NavLink = styled(Link).attrs(props => ({
  activeStyle: {
    background: theme.colors.yellow,
    color: theme.colors.black
  }
}))`
  ${linkMixin}
  display: block;
  padding: ${theme.spacing.sm};
  border-radius: 5px;
  transition: all 0.2s ease-in;
`
