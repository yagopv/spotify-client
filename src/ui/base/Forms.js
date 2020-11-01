import styled from 'styled-components/macro'
import { space } from '../helpers'
import { theme } from '../theme'

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  position: relative;
  color: ${({ color }) => color || theme.colors.darkGrey};
`

export const Label = styled.label`
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSize.sm};
  color: inherit;
  display: block;
  margin-bottom: 0.5rem;
`

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text'
}))`
  flex: 1;
  font-family: ${theme.fontFamily.primary};
  font-size: 1rem;
  border 2px solid;
  padding: 10px;
  background: transparent;
  outline: none;
  color: ${theme.colors.yellow};
  border-color: ${theme.colors.yellow}

  ::placeholder {
    color: ${theme.colors.yellow};
    opacity: 0.5;
  }
`

export const IconButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  font-size: 0;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 1;
  }
  ${space}
`
