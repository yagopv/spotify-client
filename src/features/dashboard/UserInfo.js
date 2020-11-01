import React, { useState } from 'react'
import { Text, Link, Separator } from '../../ui/base'
import { Avatar, UserMenu, UserContainer } from './styles'

export default function UserInfo({ user, onLogout }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <UserContainer>
      <Avatar
        src={user?.images?.[0].url}
        alt="avatar"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      />

      <UserMenu active={isMenuVisible}>
        {user && <Text color="lightGrey">{user.display_name}</Text>}
        <Separator color="lightGrey" />
        <Link to="#" onClick={onLogout}>
          Logout
        </Link>
      </UserMenu>
    </UserContainer>
  )
}
