import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Flex, FlexItem } from '../../ui/base'
import { MenuIcon, BackIcon, SearchIcon, SearchInput } from './styles'
import UserInfo from './UserInfo'
import { useDebounce } from '../../lib/hooks/useDebounce'

export default function Header({ user, onToggleMenu, onLogout, onTextChange }) {
  const location = useLocation()
  const history = useHistory()
  const [term, setTerm] = useState('')
  const debouncedValue = useDebounce(term, 1000)
  const { searchTerm } = useParams()

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
            defaultValue={searchTerm}
            px="md"
            value={term}
            onChange={event => setTerm(event.target.value)}
            placeholder="Search for albums, artists"
          />
        </FlexItem>
      )}
      <SearchIcon />
      <UserInfo user={user} onLogout={onLogout} />
    </Flex>
  )
}
