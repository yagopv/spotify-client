import React, { useRef } from 'react'
import { Header, Link, List, ListItem, Text } from '../../ui'
import { MainContainer, Content, Navbar } from '../../ui/DashboardLayout'
import { useAuth, LOGOUT } from '../../lib/context/auth-context'
import { useUI } from '../../lib/context/ui-context'
import { useMedia } from '../../lib/hooks/useMedia'
import { theme } from '../../ui/theme'
import { useOnClickOutside } from '../../lib/hooks/useOnClickOutside'
import { Router, Switch, useRouteMatch } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import Home from '../home/Home'
import Search from '../search/Search'
import MyLibrary from '../my-library/MyLibrary'

export function Dashboard() {
  const [{ user }, dispatch] = useAuth()
  const [uiState, setUIState] = useUI()
  const isMobile = useMedia([theme.breakpoints.md], [false], true)
  const categoryList = useRef(null)
  useOnClickOutside(categoryList, () => {
    if (uiState.isCategoryMenuOpened) {
      setUIState({
        isCategoryMenuOpened: false,
      })
    }
  })
  let { path, url } = useRouteMatch()

  return (
    <React.Fragment>
      <MainContainer isMenuOpened={uiState.isCategoryMenuOpened}>
        <Navbar>
          <Text as="h1" pt="md">
            Spotify
          </Text>
          <List pt="md">
            <ListItem py="sm">
              <Link to={`${url}`}>Home</Link>
            </ListItem>
            <ListItem py="sm">
              <Link to={'/search'}>Search</Link>
            </ListItem>
            <ListItem py="sm">
              <Link to={`/my-library`}>My Library</Link>
            </ListItem>
          </List>
        </Navbar>
        <Content>
          <Header
            user={user}
            onToggleMenu={() =>
              setUIState({
                isCategoryMenuOpened: !uiState.isCategoryMenuOpened,
                isNoteListMenuOpened: false,
              })
            }
            onLogout={() => {
              dispatch({ type: LOGOUT })
              localStorage.removeItem('currentUser')
            }}
          />
          <Switch>
            <PrivateRoute exact path={path}>
              <Home />
            </PrivateRoute>
            <PrivateRoute path={`/search`}>
              <Search />
            </PrivateRoute>
            <PrivateRoute path={`/my-library`}>
              <MyLibrary />
            </PrivateRoute>
          </Switch>
        </Content>
      </MainContainer>
    </React.Fragment>
  )
}
