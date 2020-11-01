import styled from 'styled-components/macro'
import { space } from '../helpers'
import { theme } from '../theme'

export const Button = styled.button`
  font-family: ${theme.fontFamily.secondary};
  transition: all 0.2s;
  min-width: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  background: ${theme.colors.yellow};
  text-transform: uppercase;
  color: ${theme.colors.black};
  outline: none;
  cursor: pointer;
  height: 50px;

  :hover {
    background: ${theme.colors.black};
    color: ${theme.colors.yellow};
    border: 2px solid ${theme.colors.secondary};
  }

  :active {
    transform: translateY(2px);
  }
  ${space}
`
