import styled from 'styled-components/macro'
import { color, fontFamily } from './theme'
import { withSpacingProps } from './utils'

export const Button = styled.button`
  font-family: ${fontFamily('secondary')};
  transition: all 0.2s;
  min-width: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  background: ${color('yellow')};
  text-transform: uppercase;
  color: ${color('black')};
  outline: none;
  cursor: pointer;
  height: 50px;

  :hover {
    background: ${color('black')};
    color: ${color('yellow')};
    border: 2px solid ${color('secondary')};
  }

  :active {
    transform: translateY(2px);
  }
  ${withSpacingProps}
`
