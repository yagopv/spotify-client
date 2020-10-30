import styled from 'styled-components/macro'
import { color } from './theme'

export const MainContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 20vw 1fr;
  transform: translateX(0);
  transition: transform 0.5s ease;
  height: 100%;
  ${props => `
    @media ${props.theme.breakpoints.xs} {
      grid-template-columns: 50vw 100vw;
      transition: transform 0.33s ease;
      transform: translateX(${props.isMenuOpened ? 0 : '-50vw'});
    }
  `}
`

export const Navbar = styled.nav`
  background-color: #000;
  padding: 5px 2rem;
`

export const Content = styled.main`
  background-color: #181818;
`
