import React, { useEffect, useRef } from 'react'
import { NavLink, List, ListItem, Text, Box } from '../../ui/base'
import Header from './Header'
import {
  DashboardContainer,
  DashboardNavbar,
  DashboardContent,
  DashboardMain
} from './styles'
import { useAuth } from '../../lib/context/auth-context'
import { useUI } from '../../lib/context/ui-context'
import { useOnClickOutside } from '../../lib/hooks/useOnClickOutside'
import { Switch, useHistory, useRouteMatch } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import Home from '../home/Home'
import Search from '../search/Search'
import MyLibrary from '../my-library/MyLibrary'
import { FaSistrix, FaHome, FaBook, FaSpotify } from 'react-icons/fa'
import { useAsync } from '../../lib/hooks/useAsync'
import http from '../../http'

export function Dashboard() {
  const [uiState, setUIState] = useUI()
  const categoryList = useRef(null)
  const history = useHistory(null)
  const [user, setUser] = useAuth()

  useOnClickOutside(categoryList, () => {
    if (uiState.isCategoryMenuOpened) {
      setUIState({
        isCategoryMenuOpened: false
      })
    }
  })

  let { path, url } = useRouteMatch()

  const { data: profile, run: runProfile } = useAsync()

  useEffect(() => {
    runProfile(http.getUser())
  }, [runProfile])

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
            user={profile}
            onToggleMenu={() =>
              setUIState({
                isCategoryMenuOpened: !uiState.isCategoryMenuOpened,
                isNoteListMenuOpened: false
              })
            }
            onTextChange={value => {
              if (value) {
                history.push(`/search/${value}`)
              }
              console.log(value)
            }}
            onLogout={() => {
              history.push('/login')
              localStorage.removeItem('currentUser')
              http.currentUser = null
              setUser(null)
            }}
          />
          <DashboardMain p="md">
            <Switch>
              <PrivateRoute exact path={path}>
                <Home />
              </PrivateRoute>
              <PrivateRoute path={`/search/:searchTerm`}>
                <Search />
              </PrivateRoute>
              <PrivateRoute path={`/my-library`}>
                <MyLibrary />
              </PrivateRoute>
            </Switch>
          </DashboardMain>
        </DashboardContent>
      </DashboardContainer>
    </React.Fragment>
  )
}
