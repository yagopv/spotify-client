import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useMedia } from '../../lib/hooks/useMedia'
import { Flex, FlexItem, Link, Text } from '../../ui/base'
import { theme } from '../../ui/theme'
import { MenuIcon, BackIcon, SearchIcon, SearchInput } from './styles'

export default function Header({ user, onToggleMenu, onLogout }) {
  const isMobile = useMedia([theme.breakpoints.sm], [false], true)
  const location = useLocation()
  const history = useHistory()

  return (
    <Flex alignItems="center" p="md" as="header">
      <MenuIcon onClick={onToggleMenu} />
      <BackIcon onClick={() => history.goBack()} />
      {location.pathname === '/search' && (
        <FlexItem flex="1">
          <SearchInput
            px="md"
            onChange={event => console.log(event)}
            placeholder="Search for albums, artists"
          />
        </FlexItem>
      )}
      <FlexItem px="md" flex="1">
        <SearchIcon />
      </FlexItem>
      <FlexItem px="md" textAlign="right">
        {user && <Text>Hola {user.display_name}</Text>}
        <Link to="#" onClick={onLogout}>
          Logout
        </Link>
      </FlexItem>
    </Flex>
  )
}
