import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { useMedia } from '../../lib/hooks/useMedia'
import { Flex, FlexItem, Link, Text } from '../../ui/base'
import { theme } from '../../ui/theme'
import { MenuIcon, BackIcon, SearchIcon, SearchInput } from './styles'

export default function Header({ user, onToggleMenu, onLogout, onTextChange }) {
  const isMobile = useMedia([theme.breakpoints.sm], [false], true)
  const location = useLocation()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedValue = useDebounce(searchTerm, 1000)

  useEffect(() => {
    onTextChange(debouncedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <Flex alignItems="center" p="md" as="header">
      <MenuIcon onClick={onToggleMenu} />
      <BackIcon onClick={() => history.goBack()} />
      {location.pathname.includes('/search') && (
        <FlexItem flex="1">
          <SearchInput
            px="md"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
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
