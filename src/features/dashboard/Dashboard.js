import React, { useRef } from 'react'
import { Header, Text } from '../../ui'
import { Flex } from '../../ui'
import { DashboardLayout } from '../../ui/DashboardLayout'
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
        isNoteListMenuOpened: false,
      })
    }
  })

  return (
    <React.Fragment>
      <Header
        title="Notes App"
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
      <Flex as="main" fullHeight>
        <DashboardLayout
          isMenuOpened={uiState.isCategoryMenuOpened}
          isNoteListOpened={uiState.isNoteListMenuOpened}
        >
          <Flex direction="column" p="md" overflow="auto">
            Menu
          </Flex>
          <Flex direction="column" p="md" overflow="auto">
            Content
          </Flex>
        </DashboardLayout>
      </Flex>
    </React.Fragment>
  )
}
