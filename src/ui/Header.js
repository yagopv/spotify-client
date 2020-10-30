import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import { fontFamily, fontSize } from './theme'
import { useMedia } from '../lib/hooks/useMedia'
import { Flex, FlexItem } from './Flexbox'
import { Text } from '../ui'
import { Link } from './Link'
import { SearchInput } from './Forms'

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
      <SearchInput
        onChange={event => console.log(event)}
        placeholder="Search for albums, artists"
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
