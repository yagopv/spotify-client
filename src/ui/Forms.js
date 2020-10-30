import styled from 'styled-components/macro'
import { fontSize, fontFamily, color as themeColor, color } from './theme'
import { withSpacingProps } from './utils'

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  position: relative;
  color: ${({ color }) => color || themeColor('darkGrey')};
`

export const Label = styled.label`
  font-family: ${fontFamily('primary')};
  font-size: ${fontSize('sm')};
  color: inherit;
  display: block;
  margin-bottom: 0.5rem;
`

export const Input = styled.input.attrs(props => ({
  type: props.type || 'text',
}))`
  flex: 1;
  font-family: ${fontFamily('primary')};
  font-size: 1rem;
  border 2px solid;
  padding: 10px;
  background: transparent;
  outline: none;
  color: ${color('darkGrey')};
  border-color: ${color('darkGrey')}

  ::placeholder {
    color: ${color('darkGrey')};
    opacity: 0.5;
  }
`

export const SearchInput = styled(Input)`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjIzMyAyMS44NmwtNS43MTItNS45NGE5LjY1OSA5LjY1OSAwIDAwMi4yNzMtNi4yM2MwLTUuMzQzLTQuMzQ3LTkuNjktOS42OS05LjY5QzQuNzYzIDAgLjQxNSA0LjM0Ny40MTUgOS42OWMwIDUuMzQzIDQuMzQ4IDkuNjkgOS42OSA5LjY5YTkuNTg2IDkuNTg2IDAgMDA1LjU1Mi0xLjc1M2w1Ljc1NSA1Ljk4NWMuMjQxLjI1LjU2NS4zODguOTExLjM4OGExLjI2NSAxLjI2NSAwIDAwLjkxLTIuMTR6TTEwLjEwNSAyLjUyOGMzLjk0OSAwIDcuMTYyIDMuMjEzIDcuMTYyIDcuMTYyIDAgMy45NS0zLjIxMyA3LjE2Mi03LjE2MiA3LjE2Mi0zLjk1IDAtNy4xNjMtMy4yMTMtNy4xNjMtNy4xNjIgMC0zLjk1IDMuMjEzLTcuMTYyIDcuMTYzLTcuMTYyeiIgZmlsbD0iI0Y4QzUxRCIvPjwvc3ZnPg==);
  filter: grayscale(1) brightness(2);
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  transition: all 0.3s ease-in;

  :focus {
    flex: 1.5;
  }

  ::placeholder {
    color: ${color('darkGrey')};
    opacity: 0.5;
  }
`

export const IconButton = styled.button`
  background-image: ${props => props.image};
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
  ${withSpacingProps}
`
