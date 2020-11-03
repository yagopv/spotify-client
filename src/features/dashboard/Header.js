import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Flex, FlexItem } from '../../ui/base'
import { MenuIcon, BackIcon, SearchIcon, SearchInput } from './styles'
import UserInfo from './UserInfo'
import { useDebounce } from '../../lib/hooks/useDebounce'

export default function Header({ user, onToggleMenu, onLogout, onTextChange }) {
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
      <SearchIcon />
      <UserInfo user={user} onLogout={onLogout} />
    </Flex>
  )
}
