import React, { useRef } from 'react'
import { NavLink, List, ListItem, Text, Box } from '../../ui/base'
import Header from './Header'
import { DashboardContainer, DashboardNavbar, DashboardContent } from './styles'
import { useAuth, LOGOUT } from '../../lib/context/auth-context'
import { useUI } from '../../lib/context/ui-context'
import { useOnClickOutside } from '../../lib/hooks/useOnClickOutside'
import { Switch, useRouteMatch } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import Home from '../home/Home'
import Search from '../search/Search'
import MyLibrary from '../my-library/MyLibrary'
import { FaSistrix, FaHome, FaBook, FaSpotify } from 'react-icons/fa'

export function Dashboard() {
  const [{ user }, dispatch] = useAuth()
  const [uiState, setUIState] = useUI()
  const categoryList = useRef(null)
  useOnClickOutside(categoryList, () => {
    if (uiState.isCategoryMenuOpened) {
      setUIState({
        isCategoryMenuOpened: false
      })
    }
  })
  let { path, url } = useRouteMatch()

  return (
    <React.Fragment>
      <DashboardContainer isMenuOpened={uiState.isCategoryMenuOpened}>
        <DashboardNavbar>
          <Text as="h3" pt="md">
            <FaSpotify /> Spoticli
          </Text>
          <List mt="xl">
            <ListItem mt="md">
              <NavLink exact to={`${url}`}>
                <FaHome />{' '}
                <Box as="span" pl="xs">
                  Home
                </Box>
              </NavLink>
            </ListItem>
            <ListItem mt="md">
              <NavLink to={'/search'}>
                <FaSistrix />
                <Box as="span" pl="xs">
                  Search
                </Box>
              </NavLink>
            </ListItem>
            <ListItem mt="md">
              <NavLink to={`/my-library`}>
                <FaBook />
                <Box as="span" pl="xs">
                  MyLibrary
                </Box>
              </NavLink>
            </ListItem>
          </List>
        </DashboardNavbar>
        <DashboardContent>
          <Header
            user={user}
            onToggleMenu={() =>
              setUIState({
                isCategoryMenuOpened: !uiState.isCategoryMenuOpened,
                isNoteListMenuOpened: false
              })
            }
            onLogout={() => {
              dispatch({ type: LOGOUT })
              localStorage.removeItem('currentUser')
            }}
          />
          <Box p="md">
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
          </Box>
        </DashboardContent>
      </DashboardContainer>
    </React.Fragment>
  )
}
