import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import { fontFamily, fontSize } from './theme'
import { useMedia } from '../lib/hooks/useMedia'
import { Flex, FlexItem } from './Flexbox'
import { Text } from '../ui'
import { Link } from './Link'
import { IconInput } from './Forms'

export function Header({ title, tag, user, onToggleMenu, onLogout }) {
  const theme = useContext(ThemeContext)
  const isMobile = useMedia([theme.breakpoints.sm], [false], true)

  return (
    <Flex alignItems="center" p="md" as="header">
      {isMobile && (
        <FlexItem grow="1">
          <NavButton onClick={onToggleMenu} />
        </FlexItem>
      )}
      <IconInput
        type="search"
        onChange={event => console.log(event)}
        image={
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjIzMyAyMS44NmwtNS43MTItNS45NGE5LjY1OSA5LjY1OSAwIDAwMi4yNzMtNi4yM2MwLTUuMzQzLTQuMzQ3LTkuNjktOS42OS05LjY5QzQuNzYzIDAgLjQxNSA0LjM0Ny40MTUgOS42OWMwIDUuMzQzIDQuMzQ4IDkuNjkgOS42OSA5LjY5YTkuNTg2IDkuNTg2IDAgMDA1LjU1Mi0xLjc1M2w1Ljc1NSA1Ljk4NWMuMjQxLjI1LjU2NS4zODguOTExLjM4OGExLjI2NSAxLjI2NSAwIDAwLjkxLTIuMTR6TTEwLjEwNSAyLjUyOGMzLjk0OSAwIDcuMTYyIDMuMjEzIDcuMTYyIDcuMTYyIDAgMy45NS0zLjIxMyA3LjE2Mi03LjE2MiA3LjE2Mi0zLjk1IDAtNy4xNjMtMy4yMTMtNy4xNjMtNy4xNjIgMC0zLjk1IDMuMjEzLTcuMTYyIDcuMTYzLTcuMTYyeiIgZmlsbD0iI0Y4QzUxRCIvPjwvc3ZnPg==)'
        }
      />
      {user && (
        <FlexItem grow="1" textAlign="right">
          <div>
            <Text>Hola {user.name}</Text>
            <Link to="" onClick={onLogout}>
              Salir
            </Link>
          </div>
        </FlexItem>
      )}
    </Flex>
  )
}

function NavButton({ onClick }) {
  return (
    <a href="#tags" id="tags-toggle" onClick={onClick}>
      <svg
        width="16"
        height="13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#C86818"
          strokeWidth="3"
          d="M0 1.5h16M0 6.5h16M0 11.5h16"
        />
      </svg>
    </a>
  )
}

const Title = styled.h1`
  font-family: ${fontFamily('special')};
  font-size: ${fontSize('h3')};
`

const Tag = styled.h2`
  font-family: ${fontFamily('secondary')};
  font-size: ${fontSize('h4')};
  text-transform: uppercase;
  font-weight: bold;
`
