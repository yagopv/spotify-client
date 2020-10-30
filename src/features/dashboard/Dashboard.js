import React, { useRef } from 'react'
import { FlexItem, Header } from '../../ui'
import { MainContainer, Content, Navbar } from '../../ui/DashboardLayout'
import { useAuth, LOGOUT } from '../../lib/context/auth-context'
import { useUI } from '../../lib/context/ui-context'
import { useNotes } from './useNotes'
import { useMedia } from '../../lib/hooks/useMedia'
import { theme } from '../../ui/theme'
import { useOnClickOutside } from '../../lib/hooks/useOnClickOutside'

export function Dashboard() {
  const [{ user }, dispatch] = useAuth()
  const [uiState, setUIState] = useUI()
  const {
    state: { selectedTag },
    tags,
  } = useNotes()
  const isMobile = useMedia([theme.breakpoints.md], [false], true)
  const categoryList = useRef(null)
  useOnClickOutside(categoryList, () => {
    if (uiState.isCategoryMenuOpened) {
      setUIState({
        isCategoryMenuOpened: false,
      })
    }
  })

  return (
    <React.Fragment>
      <MainContainer isMenuOpened={uiState.isCategoryMenuOpened}>
        <Navbar></Navbar>
        <Content>
          <Header
            title="Spotify Client"
            tag={tags[selectedTag]}
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
        </Content>
      </MainContainer>
    </React.Fragment>
  )
}
