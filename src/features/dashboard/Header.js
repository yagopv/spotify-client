import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useHistory, useLocation } from 'react-router-dom'
import { useMedia } from '../../lib/hooks/useMedia'
import { Flex, FlexItem, Text, Link, Box } from '../../ui/base'
import { theme } from '../../ui/theme'
import { MenuIcon, BackIcon, SearchIcon, SearchInput } from './styles'

export default function Header({ title, tag, user, onToggleMenu, onLogout }) {
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
      <FlexItem px="md">
        <SearchIcon />
      </FlexItem>
      <Link to onClick={onLogout}>
        Logout
      </Link>
    </Flex>
  )
}
